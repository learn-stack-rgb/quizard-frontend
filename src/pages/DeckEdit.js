import React, { useState } from 'react'
import './DeckEdit.css'
import { useNavigate, useParams } from 'react-router-dom'
import editDeckLiz from '../assets/wiz-liz-cricket-tail.png'

const DeckEdit = ({ updateDeck, currentUser, decks }) => {

  const navigate = useNavigate()
  let { deck_id } = useParams()

  const currentDeck = decks?.find(deck => deck.id === +deck_id)

  const [editDeck, setEditDeck] = useState({
    title: currentDeck.title,
    user_id: currentUser.id
  })

  const handleChange = (e) => {
    setEditDeck({ ...editDeck, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateDeck(editDeck, currentDeck.id)
    navigate("/mydecks")
  }

  const handleClick = () => {
    navigate("/mydecks")
  }

  return (
    <div className='edit-container'>
      <h1>Edit Deck</h1>
      <img alt="wiz-liz-tail" src={editDeckLiz} />
      <form className='edit-card' onSubmit={handleSubmit}>
        <label>Title</label>
        <input type='text' name='title' value={editDeck.title} onChange={handleChange} />

        <input type='submit' value='Submit Change' className='edit-button' />
        <button onClick={handleClick}className='cancel-btn'>Cancel</button>
      </form>
    </div>
  )
}

export default DeckEdit