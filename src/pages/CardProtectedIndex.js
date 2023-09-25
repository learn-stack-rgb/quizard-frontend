import React, {useState, useEffect} from 'react'
import './CardProtectedIndex.css'
import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap'
import { useParams, NavLink } from 'react-router-dom'

const CardProtectedIndex = ({ decks, cards }) => {
  const { deck_id } = useParams()
  const [currentDeckTitle, setCurrentDeckTitle] = useState()

  useEffect(() => {
    const currentDeck = decks.find(deck => deck.id === parseInt(deck_id))
    if (currentDeck) {
      setCurrentDeckTitle(currentDeck.title)
    }
  }, [deck_id, decks])
  
  const myCards = cards.filter(card => card.deck_id === parseInt(deck_id))

  return (
    <>
      <div className='card-page-container'>
      <h1>{currentDeckTitle}</h1>
        {myCards?.map((card, index) => {
          return (
            <div className='card-content'key={index}>
              Question: {card.question}
              <br/>
              Answer : {card.answer}
              <div className='card-buttons'>
                <button>Edit</button>
                <button id='delete'>Delete</button>
              </div>
            </div>
          )
        })}
      </div >
    </>
  )
}

export default CardProtectedIndex