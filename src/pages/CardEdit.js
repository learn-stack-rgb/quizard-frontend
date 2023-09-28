import React, { useState ,useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import editLiz from '../assets/edit-card-liz.png'
import './CardEdit.css'

const CardEdit = ({ decks, cards, updateCard }) => {
  const { card_id, deck_id } = useParams()
  const navigate = useNavigate()

  let currentCard = cards?.find((card) => card.id === +card_id)

  const [editCard, setEditCard] = useState({
    question: currentCard?.question,
    answer: currentCard?.answer,
  })

  const handleChange = (e) => {
    setEditCard({ ...editCard, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    updateCard(editCard, deck_id, card_id )
    navigate(`/mydecks/${deck_id}`)
  }

  const handleCancel = () => {
    console.log(deck_id)
  }

  return (
    <div className='card-edit-div'>
      <h1>Edit Card</h1>
      <img className='edit-liz' alt="wiz-liz-edit" src={editLiz} />
      <form className='edit-card' onSubmit={handleSubmit}>
        <label>Question</label>
        <input type='text' name='question' value={editCard.question} onChange={handleChange} />

        <label>Answer</label>
        <input type='text' name='answer' value={editCard.answer} onChange={handleChange} />

        <input type='submit' value='Submit Change' className='edit-button' />
        
        <button onClick={handleCancel} className='cancel-btn'>Cancel</button>
      </form>
    </div>
  )
}

export default CardEdit
