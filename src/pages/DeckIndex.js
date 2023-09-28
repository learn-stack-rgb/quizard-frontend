import React from "react";
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap";
import deckIndexImg from '../assets/1695850202861-Standard.png'
import '../App.css' 

const DeckIndex = ({ decks }) => {
  return (
    <div className='deck-page-container' style={{backgroundColor:"var(--primary-color)"}}>
      <span className="deck-index-span">
      <h2 className='page-title'>All Decks</h2>
      <img className="deck-index-img" src={deckIndexImg} />
      </span>
      {decks.map((deck, index) => (
        <div className='deck-container' key={index}>
          <h2 className="deck-title">{deck.title}</h2>
          <NavLink to={`/decks/${deck.id}`}>
            <Button style={{
              borderRadius: '10px',
              fontSize: '1.2rem',
              backgroundColor: 'gray'
              }}>
              View Deck
            </Button>
          </NavLink>

          <NavLink to={`/decks/${deck.id}/quiz`}>
            <Button style={{
              borderRadius: '10px',
              fontSize: '1.2rem',
              backgroundColor: 'gray'
              }}>
              Quiz
            </Button>
          </NavLink>
          
        </div>
      ))}
    </div>
  )
}

export default DeckIndex
