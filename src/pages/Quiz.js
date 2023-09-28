import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import './Quiz.css'
import CardDetails from './CardDetails'
import quizLiz from '../assets/wiz-liz-book.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { AiFillFire, AiOutlineFire } from 'react-icons/ai'

const Quiz = ({ decks, cards, readCard }) => {

  const { deck_id } = useParams()
  const [currentDeckTitle, setCurrentDeckTitle] = useState()
  const [cardIndex, setCardIndex] = useState(0)
  const containerRef = useRef()

  useEffect(() => {
    const currentDeck = decks.find(deck => deck.id === parseInt(deck_id))
    if (currentDeck) {
      setCurrentDeckTitle(currentDeck.title)
    }
    readCard(deck_id)
    containerRef.current.scrollTo(0, 0)
  }, [deck_id, decks])

  const handleRight = () => {
    const container = containerRef.current
    if (cardIndex < myCards.length - 1) {
      container.scrollBy({ left: 500, behavior: 'smooth' })
      setCardIndex(prevIndex => (prevIndex + 1))
    }
  }

  const handleLeft = () => {
    const container = containerRef.current
    if (cardIndex > 0) {
      container.scrollBy({ left: -500, behavior: 'smooth' })
      setCardIndex(prevIndex => (prevIndex - 1))
    }
  }

  const myCards = cards.filter(card => card.deck_id === parseInt(deck_id))

  return (
    <div className='quiz-page-container'>
      <h1>{currentDeckTitle} Quiz</h1>
      <h2>Honor System</h2>
      <img src={quizLiz} alt="quiz lizard" />
      <div className='slider-container' ref={containerRef}>
        {myCards.map((card, index) => {
          return (
            <div className='quiz-cards' key={index}>
              <CardDetails card={card} />
            </div>
          )
        })}
      </div>

      <div className="indicators-container">
        {myCards.map((card, index) => (
          <span key={index} className='indicators'>
            {index === cardIndex ? <AiFillFire size="2rem" color= "#aa4203"/> : <AiOutlineFire size="2rem" />}
          </span>
        ))}
      </div>

      <div className='quiz-buttons'>
        <button className='correct-btn'>Correct</button>
        <button className='wrong-btn' >Wrong</button>
      </div>

      <span className='arrows-container'>
        <button className='left-arrow' onClick={handleLeft}>
          <FaArrowLeft size="4rem" />
        </button>
        <button className='right-arrow' onClick={handleRight} >
          <FaArrowRight size="4rem" />
        </button>
      </span>

    </div>
  )
}

export default Quiz

