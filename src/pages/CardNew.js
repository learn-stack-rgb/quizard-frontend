import React, { useState } from 'react'
import { Form, Input, Label, NavLink, FormGroup } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './CardNew.css'
import createLiz from '../assets/Create-Card.png'

const CardNew = ({ createCard, decks }) => {
    const { deck_id } = useParams()
    const navigate = useNavigate()
    const [newCard, setNewCard] = useState({
        question: '',
        answer: '',
        deck_id: deck_id,
    })

    const handleChange = (e) => {
        setNewCard({ ...newCard, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        createCard(newCard, deck_id)
        navigate(`/mydecks/${deck_id}`)
    }

    const handleCancel = () => {
        navigate(`/mydecks/${deck_id}`)
    }

    return (
        <>
            <div className='card-new-container'>
                <h1>Create A Card</h1>
                <img className='create-liz' alt="create-liz" src={createLiz} />
                <form className='create-card' onSubmit={handleSubmit}>
                    <label classname='create-question' for='question'>Question</label>
                    <input type='text' name='question' value={newCard.question} onChange={handleChange} />

                    <label className='create-answer' for='answer'>Answer</label>
                    <input type='text' name='answer' value={newCard.answer} onChange={handleChange} />

                    <input type='submit' value='Submit Change' className='create-submit-btn' />

                    <button onClick={handleCancel} className='create-cancel'>Cancel</button>
                </form>
            </div>
        </>
    )

}


export default CardNew

