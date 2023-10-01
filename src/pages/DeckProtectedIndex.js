import React, { useLayoutEffect} from 'react'
import './DeckProtectedIndex.css'
import { Button } from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'
import protecLizDeck from '../assets/wiz-liz-read.png'
import { gsap } from "gsap"

const DeckProtectedIndex = ({ decks, currentUser, deleteDeck }) => {
  let { id } = useParams()

  const selectedDeck = decks?.find((deck) => deck.id === +id)

  const myDecks = decks.filter(deck => currentUser?.id === deck.user_id)

  useLayoutEffect(() => {
    const anim = gsap.fromTo(".deck-container", {x: "200vw"}, {x: 0, rotateX: 720, rotate: 700 , duration: 1, stagger: {
      each: 0.15,
      from: "start",
      grid: "auto"
    }, clearProps: "x,rotateX",
    })

    gsap.fromTo(".page-title, .protect-liz-deck", { opacity: 0, scale: 0.5}, { opacity: 1, scale: 1, duration: 2})

  }, [])

  return (
    <>
      <div className='deck-page-container protect-deck-container'>
        <span className='protect-deck-span'>
          <h2 className='page-title'>My Decks</h2>
          <img className='protect-liz-deck' src={protecLizDeck} />
        </span>
        {myDecks?.map((deck, index) => {
          return (
            <div className='deck-container protect-deck' key={index}>
              <h2 className='deck-title'>{deck.title}</h2>
              <NavLink to={`/mydecks/${deck.id}`}>
                <Button>
                  View Cards
                </Button>
              </NavLink>

              <NavLink to={`/mydecks/${deck.id}/edit`}>
                <Button>
                  Edit Name
                </Button>
              </NavLink>
              
              <NavLink to={`/decks/${deck.id}/quiz`}>
                <Button >
                  Take Quiz
                </Button>
              </NavLink>

              <NavLink to={"/mydecks"}>
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