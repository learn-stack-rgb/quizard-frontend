import React, {useState, useEffect, useLayoutEffect} from 'react'
import './CardProtectedIndex.css'
import { useParams, NavLink } from 'react-router-dom'
import { gsap } from 'gsap'


const CardProtectedIndex = ({ decks, deleteCard, cards ,readCard }) => { 
  const { deck_id } = useParams()
  const [currentDeckTitle, setCurrentDeckTitle] = useState()
  const myCards = cards.filter(card => card.deck_id === parseInt(deck_id))
  
  useLayoutEffect(() => {
    
    gsap.fromTo(".card-content:nth-child(even)", {
      x: "100vh"
    }, {
      x: 0,
      duration: 1.5,
      stagger: {
        from: "top",
        each: .25,
      },
      clearProps: "all"
    })
    
    gsap.fromTo(".card-content:nth-child(odd)", {
      x: "-100vh"
    }, {
      x: 0,
      duration: 1.5,
      stagger: {
        from: "top",
        each: .25,
      },
      clearProps: "all"
      
    })
    
  },[])
  
  useEffect(() => {
    const currentDeck = decks.find(deck => deck.id === parseInt(deck_id))
    if (currentDeck) {
      setCurrentDeckTitle(currentDeck.title)
    }
    readCard(deck_id)
  }, [deck_id, decks])

  return (
    <>
      <div className='card-page-container'>
      <h1>{currentDeckTitle}</h1>
      <NavLink to={`/mydecks/${deck_id}/cardnew`}><button id="create-card">Create Card</button></NavLink>
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