import React from 'react'
import './CardProtectedIndex.css'
import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap'
import { useParams, NavLink } from 'react-router-dom'

const CardProtectedIndex = ({ decks, cards, currentUser }) => {
  const { deck_id } = useParams()

  const myCards = cards.filter(card => card.deck_id === parseInt(deck_id))

  return (
    <>
      <h1>My Cards</h1>
      <div>
        {myCards?.map((card, index) => {
          return (
            <Card key={index}>
              <CardBody>
                <CardTitle>
                  {card.question}
                </CardTitle>
                <CardText>
                  {card.answer}
                </CardText>
                <NavLink>
                  <Button>
                    Edit
                  </Button>
                </NavLink>
                <NavLink />
                <NavLink>
                  <Button>
                    Delete
                  </Button>
                </NavLink>
              </CardBody>
            </Card>
          )
        })}
      </div >
    </>
  )
}

export default CardProtectedIndex