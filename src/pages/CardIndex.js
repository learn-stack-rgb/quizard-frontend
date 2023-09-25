import React, { useEffect, useState } from 'react'
import './CardIndex.css'
import { useParams } from "react-router-dom";
import CardDetails from './CardDetails';

const CardIndex = ({ decks }) => {
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

  const handleClick = () => {

  }
  return (
    <div className='deck-page-container'>
      <h2 className='page-title' style={{textShadow: "0px 5px 10px #4A5D23"}}>
        {currentDeckTitle}
      </h2>

      {myCards.map((card, index) => (
        <CardDetails key={index} card={card} />
      ))}
    </div>
  )
}

export default CardIndex;
