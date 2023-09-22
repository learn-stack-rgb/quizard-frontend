import React, {useState, useEffect} from 'react'
import './CardProtectedIndex.css'
import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap'
import { useParams, NavLink } from 'react-router-dom'

const CardProtectedIndex = ({ decks, cards }) => {
  const { deck_id } = useParams()
  const [currentDeckTitle, setCurrentDeckTitle] = useState()

  useEffect(() => {
    const currentDeck = decks.find(deck => deck.id === parseInt(deck_id))
    if (currentDeck) {
      setCurrentDeckTitle(currentDeck.title)
    }
  }, [deck_id, decks])
  
  const myCards = cards.filter(card => card.deck_id === parseInt(deck_id))

  return (
    <>
      <h1>{currentDeckTitle}</h1>
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
                <NavLink >
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