import React, {useState, useEffect} from 'react'
import './CardProtectedIndex.css'
import { useParams, NavLink } from 'react-router-dom'


const CardProtectedIndex = ({ decks, deleteCard }) => { 
  const { deck_id } = useParams()
  const [currentDeckTitle, setCurrentDeckTitle] = useState()
  const [cards, setCards] = useState([])

  useEffect(() => {
    const currentDeck = decks.find(deck => deck.id === parseInt(deck_id))
    if (currentDeck) {
      setCurrentDeckTitle(currentDeck.title)
    }
  }, [deck_id, decks])

  useEffect(() => {
    readCard()
  }, [])

  const readCard = () => {
    fetch(`http://localhost:3000//decks/${deck_id}/cards`)
    .then(response => response.json())
    .then(payload => {
      setCards(payload)
    })
    .catch(error => console.log(error))
  }
  
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
               <NavLink to={`/cardedit/${card.id}`}><button>Edit</button> </NavLink>   
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







