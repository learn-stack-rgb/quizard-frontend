import React, { useState } from 'react'
import { Form, Input, Label, Button, FormGroup } from 'reactstrap'
// import { useNavigate } from 'react-router-dom' || TODO vvvv
import './DeckNew.css'

const DeckNew = ({ createDeck, current_user }) => {

    // const navigate = useNavigate() || TODO uncomment after protected index is made and merged
    const [newDeck, setNewDeck] = useState({
        // user_id: current_user.id, || TODO Uncomm
        title: ''
    })

    const handleChange = (e) => {
        setNewDeck({ ...newDeck, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        createDeck(newDeck)
        // navigate('/mydecks')  || TODO: uncomment for nav later
    }

    return (

        <Form>
            <div className='deckHeader'>
                <h2>Add A New Deck</h2>
            </div>
            <FormGroup>
                <Label for='title'>Deck Title:</Label>
                <Input id='title' name='title' placeholder='Enter your deck title' type='text' onChange={handleChange} value={newDeck.title} />
            </FormGroup>
            <Button onClick={handleSubmit} name='submit' className='deckBtn' >Create Deck</Button>
        </Form>
    )
}

export default DeckNew