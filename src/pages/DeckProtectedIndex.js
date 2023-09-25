import React from 'react'
import './DeckProtectedIndex.css'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const DeckProtectedIndex = ({ decks, currentUser }) => {

  const myDecks = decks.filter(deck => currentUser?.id === deck.user_id)

  return (
    <>
      <div className='deck-page-container'>
        <h2 className='page-title'>My Decks</h2>
        {myDecks?.map((deck, index) => {
          return (
            <div className='deck-container' key={index}>
              <h2 className='deck-title'>{deck.title}</h2>
              <NavLink to={`/mydecks/${deck.id}/mycards`}>
                <Button>
                  View Deck
                </Button>
                <NavLink />
                <NavLink>
                  <Button>
                    Quiz
                  </Button>
                </NavLink>
                <NavLink to={`/mydecks/${deck.id}/edit`}>
                  <Button>
                    Edit
                  </Button>
                </NavLink>
                <NavLink />
                <Button className='delete-button'>
                  Delete
                </Button>
              </NavLink>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DeckProtectedIndex