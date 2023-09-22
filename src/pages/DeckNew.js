import React, { useState } from 'react'
import { Form, Input, Label, Button, FormGroup } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import './DeckNew.css'

const DeckNew = ({ createDeck, currentUser }) => {

    const navigate = useNavigate()
    const [newDeck, setNewDeck] = useState({
        user_id: currentUser.id,
        title: ''
    })

    const handleChange = (e) => {
        setNewDeck({ ...newDeck, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        createDeck(newDeck)
        navigate('/mydecks')
    }

    return (
        <Form className='new-container'>
            <h2>Add A New Deck</h2>
            <FormGroup className='new-card'>
                <Label for='title' className='new-label'>Title</Label>
                <Input id='title' name='title' placeholder='Deck title' type='text' onChange={handleChange} value={newDeck.title} />
                <Button onClick={handleSubmit} name='submit' className='new-button' >Create!</Button>
            </FormGroup>
        </Form>
    )
}

export default DeckNew