import React from "react";
import { NavLink, useParams } from "react-router-dom"
import './Deckindex.css' 
import { Button } from "reactstrap";
import '../App.css' 

const DeckIndex = ({ decks }) => {
  const {deck_id} = useParams()
  return (
    <div className='deck-page-container'>
      <h2 className='page-title'>All Decks</h2>
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
        </div>
      ))}
    </div>
  )
}

export default DeckIndex
