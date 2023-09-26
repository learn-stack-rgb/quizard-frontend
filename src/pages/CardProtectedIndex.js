import React, {useState, useEffect} from 'react'
import './CardProtectedIndex.css'
import { useParams, NavLink } from 'react-router-dom'


const CardProtectedIndex = ({ decks, deleteCard, cards ,readCard }) => { 
  const { deck_id } = useParams()
  const [currentDeckTitle, setCurrentDeckTitle] = useState()

  useEffect(() => {
    const currentDeck = decks.find(deck => deck.id === parseInt(deck_id))
    if (currentDeck) {
      setCurrentDeckTitle(currentDeck.title)
    }
    readCard(deck_id)
  }, [deck_id, decks])
  
  const myCards = cards.filter(card => card.deck_id === parseInt(deck_id))

  return (
    <>
      <div className='card-page-container'>
      <h1>{currentDeckTitle}</h1>
      <NavLink to={`/mydecks/${deck_id}/cardnew`}><button>Create Card</button></NavLink>
        {myCards?.map((card, index) => {
          return (
  
            <div className='card-content'key={index}>
              Question: {card.question}
              <br/>
              Answer : {card.answer}
              <div className='card-buttons'>
               <NavLink to={`/mydecks/${deck_id}/${card.id}/cardedit`}><button>Edit</button> </NavLink>   
               <NavLink to={`/mydecks/${deck_id}`}> <button id='delete' onClick={() => deleteCard(deck_id, card.id)}>Delete</button></NavLink>
              </div>
            </div>
          )
        })}
      </div >
    </>
  )
}

export default CardProtectedIndex 







