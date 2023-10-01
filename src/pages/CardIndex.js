import React, { useEffect, useState } from 'react'
import './CardIndex.css'
import { useParams } from "react-router-dom";
import CardDetails from './CardDetails';
import Details from '../assets/Delete-card.png'

const CardIndex = ({ decks, cards, readCard }) => {
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
    <div className='deck-page-container'>
      <h2 className='page-title' style={{textShadow: "0px 5px 10px #4A5D23"}}>
      <img className='detail-card' src={Details} />
        {currentDeckTitle}
      </h2>

      {myCards.map((card, index) => (
        <CardDetails key={index} card={card} />
      ))}
    </div>
  )
}

export default CardIndex;
