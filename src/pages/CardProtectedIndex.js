import React, {useState, useEffect} from 'react'
import './CardProtectedIndex.css'
import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap'
import { useParams, NavLink } from 'react-router-dom'

const CardProtectedIndex = ({ decks }) => {
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