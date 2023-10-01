import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap'
import './Home.css'
import wizR from '../assets/WizLizRGB.png'
import CardDetails from './CardDetails';
import mockCards from "../mockCards"


const Home = ({ currentUser }) => {
  const parent = useRef()
  const headerRef = useRef()
  const tl = useRef()
  const h1Ref = useRef()
  const h2Ref = useRef()
  const navigate = useNavigate()

  const [card, setCard] = useState(mockCards[0])

  useEffect(() => {
    let num = Math.floor(Math.random() * mockCards.length)
    setCard(mockCards[num])
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ defaults: { duration: 1 } })
        .from(h1Ref.current, { y: "-100%", ease: 'bounce', rotation: "-540" })
        .from(h2Ref.current, { y: "+50vh", opacity: 0, duration: 1, ease: "back.out(1.3)" })
        .from('.homeImg', { opacity: 0, duration: 1.5 }, 0)
        .from('.step-1-container', { x: "-50vw", duration: 1.5, opacity: 0})
        .from('.step-2-container', { x: "+50vw", opacity: 0, duration: 1.5 })
        .from('.home-card', {opacity: 0, x: "-100vw", rotation: -720, duration: 5}, 1)
        .from('.free-card-title', {opacity: 0}, .5)
        .from('.step-3-container', {y: "-50vh", opacity: 0, ease: "elastic"} )
        .fromTo(".home-signup-btn", {opacity: 1}, {opacity: .1, repeat: -1, yoyo: true, duration: .5}, 2.5)

    }, parent)
    return () => ctx.revert()
  }, [])

  return (
    <div className='home-container' ref={parent}>
      <div className='header' ref={headerRef}>
        <h1 ref={h1Ref}>QUIZARD</h1>
        <h2 ref={h2Ref}>Master Any Topic, One Card at a Time!</h2>
      </div>
      <img src={wizR} className='homeImg' alt='homeImg' />
      {!currentUser && (
        <>
          <div className='home-btns'>
            <button onClick={() => navigate("/login")}>Log In!</button>
            <button className="home-signup-btn"onClick={() => navigate("/signup")}>Sign Up!</button>
          </div>
          <h2 className='free-card-title'>Free Card of the Day</h2>

          <div className='home-card'>
            <CardDetails turnDirection={"vertical"} card={card} />
          </div>

          <div className='step-1-container'>
            <b>1. Join the Quest:</b>
            <br />
            Haven't enlisted? Click on that flashy "Sign Up" in the menu bar. All you need is an email and a password. Boom! You're in the Quizard Club.
          </div>
          <div className='step-2-container'>
            <b>2. Gather Your Cards:</b>
            <br />
            With a deck in place, it's time for the real magic. Dive into your deck's edit mode and conjure up some questions. Jot down an answer, hit submit, and voilà! Create as many as your heart desires, or edit and banish (delete) the ones that don’t spark joy.
          </div>
        </>
      )}

      {currentUser && (
        <>
          <div className='step-1-container'>
            <b>1. Your Deck, Your Kingdom:</b>
            <br />
            Fresh account? Empty deck page? No worries! Click on "Add Deck" to name your kingdom (aka your deck title). Hit “create” and watch the magic unfold.

          </div>
          <div className='step-2-container'>
            <b>2. Gather Your Cards:</b>
            <br />
            With a deck in place, it's time for the real magic. Dive into your deck's edit mode and conjure up some questions. Jot down an answer, hit submit, and voilà! Create as many as your heart desires, or edit and banish (delete) the ones that don’t spark joy.
          </div>
          <div className='step-3-container'>
            <b>3. Challenge Thyself:</b>
            <br />
            On your main deck page, view your arsenal of decks. Train your brain by quizzing yourself or tweak your decks as you evolve.
          </div>
        </>
      )}

    </div>
  )
}

export default Home