import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Quiz.css'
import CardDetails from './CardDetails'
import quizLiz from '../assets/wiz-liz-book.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { AiFillFire, AiOutlineFire } from 'react-icons/ai'
import { gsap } from 'gsap'
import motivationalMessages from '../motivationalMessages'
import { NavLink } from 'react-router-dom'


const Quiz = ({ decks, cards, readCard }) => {

  const { deck_id } = useParams()
  const [currentDeckTitle, setCurrentDeckTitle] = useState()
  const [cardIndex, setCardIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const [numCorrect, setNumCorrect] = useState(0)
  const containerRef = useRef()
  const tl = useRef()
  const parentRef = useRef()
  const [message, setMessage] = useState(motivationalMessages[0])


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline()
        .fromTo(".quiz-cards",
          { y: "-100%" },
          { y: "0", ease: 'power1', duration: 1.5, rotation: "-360" })
    }, parentRef)
    return () => ctx.revert()
  }, [cardIndex])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline()
        .fromTo(".motiv-msg-container",
          { x: "190%" },
          { x: "-250%", ease: 'none', duration: 15 })
    }, parentRef)
    return () => ctx.revert()
  }, [message])

  useEffect(() => {
    const currentDeck = decks.find(deck => deck.id === parseInt(deck_id))
    if (currentDeck) {
      setCurrentDeckTitle(currentDeck.title)
    }
    readCard(deck_id)
    setPoints(0)
    setCardIndex(0)
  }, [deck_id, decks])



  const handleRight = () => {
    const container = containerRef.current
    if (cardIndex < myCards.length - 1) {
      container.scrollBy({ left: 700, behavior: 'smooth' })
      setCardIndex(prevIndex => (prevIndex + 1))
    }
    else if (cardIndex === myCards.length - 1) {
      container.scrollTo({ left: 0, behavior: "smooth" })
      setCardIndex(0)
    }
  }

  const handleLeft = () => {
    const container = containerRef.current
    if (cardIndex > 0) {
      container.scrollBy({ left: -500, behavior: 'smooth' })
      setCardIndex(prevIndex => (prevIndex - 1))
    } else {
      container.scrollTo({right: 0, behavior: "smooth"})
      setCardIndex(myCards.length-1)
    }
  }

  const handleCorrect = () => {
    const prevPoints = points
    const prevNumCorrect = numCorrect
    setPoints(prevPoints + 100)
    setNumCorrect(prevNumCorrect + 1)
    handleRight()
  }

  const handleWrong = () => {
    const prevPoints = points
    setPoints(prevPoints - 50)
    returnMsg()
  }

  const returnMsg = () => {
    const randomIndex = Math.floor(Math.random() * motivationalMessages.length)
    setMessage(motivationalMessages[randomIndex])
    console.log(message)
  }
  const myCards = cards.filter(card => card.deck_id === parseInt(deck_id))

  return (
    <div className='quiz-page-container' ref={parentRef}>
      <h1>{currentDeckTitle} Quiz</h1>
      <h2>Honor System</h2>
      <img src={quizLiz} alt="quiz lizard" />
      <div className='slider-container' ref={containerRef}>
        {myCards.length > 0 ? (
          myCards.map((card, index) => (
            <div className='quiz-cards' key={index}>
              <CardDetails card={card} />
            </div>
          ))
        ) : (
          <div className='quiz-no-cards'>
            <h2>No Cards</h2>
            <NavLink to={`/mydecks/${deck_id}/cardnew`}><button id="create-card">Create Card</button></NavLink>
          </div>
        )}
      </div>

      <div className="indicators-container">
        {myCards.map((card, index) => (
          <span key={index} className='indicators'>
            {index === cardIndex ? <AiFillFire size="2rem" color="#aa4203" /> : <AiOutlineFire size="2rem" />}
          </span>
        ))}
      </div>

      <div className='quiz-buttons'>
        <button className='correct-btn' onClick={handleCorrect}>Correct</button>
        <button className='wrong-btn' onClick={handleWrong}>Wrong</button>
      </div>

      <span className='arrows-container'>
        <button className='left-arrow' data-testid="left-arrow" onClick={handleLeft}>
          <FaArrowLeft size="4rem" />
        </button>
        <button className='right-arrow' data-testid="right-arrow" onClick={handleRight} >
          <FaArrowRight size="4rem" />
        </button>
      </span>

      <div className='quiz-instructions'>
        <b>How To: </b>
        <br />
        <h5>Answer the question (out loud or in your head) for each card and check your answer by flipping the card over.
          <br />
          <br />
          Judge your answer and give your self points by clicking <span className='word-correct'>Correct</span>, or click <span className='word-wrong'>Wrong</span> for a motivational message (and lose points!).
        </h5>
      </div>

      <div className="quiz-score-container">
        <span className="quiz-score">
          <div className='score-div'>
            <b>Your Score</b>
            <br />
            <h5>{points}</h5>
          </div>
          <div className='question-div'>
            <b>Correct</b>
            <br />
            <h5>{numCorrect}</h5>
          </div>
        </span>
      </div>

      <div className='motiv-msg-container'>
        <h2 className='motiv-msg'>{message}</h2>
      </div>
    </div>
  )
}

export default Quiz

