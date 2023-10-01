import React, { useLayoutEffect, useRef} from "react";
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap";
import deckIndexImg from '../assets/1695850202861-Standard.png'
import '../App.css' 
import { gsap } from "gsap";

const DeckIndex = ({ decks }) => {

  useLayoutEffect(() => {
    const anim = gsap.fromTo(".deck-container", {x: "-200vw"}, {x: 0, rotateX: 720, rotate: 760 , duration: 1, stagger: {
      each: 0.15,
      from: "start",
      grid: "auto"
    }, clearProps: "all"
    })

    gsap.fromTo(".page-title, .deck-index-img", { opacity: 0, scale: 0.5}, { opacity: 1, scale: 1, duration: 2})

  }, [])

  return (
    <div className='deck-page-container' style={{backgroundColor:"var(--primary-color)"}}>
      <span className="deck-index-span">
      <h2 className='page-title'>All Decks</h2>
      <img className="deck-index-img" src={deckIndexImg} />
      </span>

      {decks.map((deck, index) => (
        <div className='deck-container' key={index} >
          <h2 className="deck-title">{deck.title}</h2>
          <NavLink to={`/decks/${deck.id}`}>
            <Button style={{
              borderRadius: '10px',
              fontSize: '1.2rem',
              backgroundColor: 'gray'
              }}>
              Study Deck
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
