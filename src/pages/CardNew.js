import React, { useState } from 'react'
import { Form, Input, Label, Button, FormGroup } from 'reactstrap'
import { useNavigate } from 'react-router-dom' 
import './CardNew.css'

const CardNew = ({createCard, deck}) => {

    const navigate = useNavigate()
    const [newCard, setNewCard] = useState({
        question: '',
        answer: '',
        // deck_id: deck.id || TODO Uncomm
    })

    const handleChange = (e) => {
        setNewCard({ ...newCard, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        createCard(newCard)
        navigate('/mycards')
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
            </FormGroup>

            <FormGroup>
                <Label for='answer'>
                    Answer:
                </Label>
                <Input id='answer' name='answer' placeholder='Enter the answer' type='text' onChange={handleChange} value={newCard.answer} />
            </FormGroup>
        </Form>
    )

}
   

export default CardNew

