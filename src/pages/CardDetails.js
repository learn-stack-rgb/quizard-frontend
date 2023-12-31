import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import './CardDetails.css'


const CardDetails = ({ card, turnDirection }) => {

  const [flip, setFlip] = useState(false)

  const handleClick = () => {
    setFlip(!flip)
  }

  return (
    <>
      <ReactCardFlip isFlipped={flip} flipDirection={turnDirection ? turnDirection : "horizontal"}>
        <div className='front' onClick={handleClick}>{card.question}
        </div>
        <div className='back' onClick={handleClick}>{card.answer}</div>
      </ReactCardFlip>
    </>
  )
}

export default CardDetails