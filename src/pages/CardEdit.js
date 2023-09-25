import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const CardEdit = ({ cards, updateCard }) => {
  const { id } = useParams()
  let currentCard = cards?.find((card) => card.id === +id)

  const [editCard, setEditCard] = useState({
    question: currentCard?.question,
    answer: currentCard?.answer,
  })

  const handleChange = (e) => {
    setEditCard({ ...editCard, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    updateCard(editCard, currentCard.id)
    navigate("/mydecks/:deck_id")
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="Question">Question</Label>
          <Input
            id="question"
            name="question"
            defaultValue={editCard.question}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="answer">Answer</Label>
          <Input
            id="answer"
            name="answer"
            defaultValue={editCard.answer}
            onChange={handleChange}
          />
        </FormGroup>
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}

export default CardEdit
