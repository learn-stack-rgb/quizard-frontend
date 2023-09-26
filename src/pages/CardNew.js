import React, { useState } from 'react'
import { Form, Input, Label, NavLink , FormGroup } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'
import './CardNew.css'

const CardNew = ({ createCard, decks }) => {
    const {deck_id} = useParams()
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

        <Form>
            <div className='cardHeader'>
                <h1>Create A Card</h1>
            </div>
            <FormGroup>
                <Label for='question'>
                    Question:
                </Label>
                <Input id='question' name='question' placeholder='Enter a question' type='text' onChange={handleChange} value={newCard.question} />

                <Label for='answer'>
                    Answer:
                </Label>
                <Input id='answer' name='answer' placeholder='Enter the answer' type='text' onChange={handleChange} value={newCard.answer} />
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </FormGroup>
        </Form>
    )

}


export default CardNew

