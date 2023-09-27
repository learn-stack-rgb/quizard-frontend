import React from 'react'
import './DeckProtectedIndex.css'
import { Button } from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'
import protecLizDeck from '../assets/wiz-liz-read.png'



const DeckProtectedIndex = ({ decks, currentUser, deleteDeck }) => {
  let { id } = useParams()

  const selectedDeck = decks?.find((deck) => deck.id === +id)

  const myDecks = decks.filter(deck => currentUser?.id === deck.user_id)

  return (
    <>
      <div className='deck-page-container'>
        <span className='protect-deck-span'>
        <h2 className='page-title'>My Decks</h2>
        <img className='protect-liz-deck' src={protecLizDeck} />
        </span>
        {myDecks?.map((deck, index) => {
          return (
            <div className='deck-container' key={index}>
              <h2 className='deck-title'>{deck.title}</h2>
              <NavLink to={`/mydecks/${deck.id}`}>
                <Button>
                  View Deck
                </Button>
              </NavLink>

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
              
              <NavLink to={"/"}>
                  <Button onClick={() => deleteDeck(deck.id)} className='delete-button'>
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