import React from 'react'
import './DeckProtectedIndex.css'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'


const DeckProtectedIndex = ({ decks, currentUser, deleteDeck }) => {
  let { id } = useParams()

  const selectedDeck = decks?.find((deck) => deck.id === +id)

  const myDecks = decks.filter(deck => currentUser?.id === deck.user_id)

  return (
    <>
      <h1>My Decks</h1>
      <div>
        {myDecks?.map((deck, index) => {
          return (
            <Card key={index}>
              <CardBody>
                <CardTitle>
                  {deck.title}
                </CardTitle>
                <NavLink to={`/mydecks/${deck.id}/mycards`}>
                  <Button>
                    Choose
                  </Button>
                <NavLink />
                <NavLink>
                  <Button>
                    Edit
                  </Button>
                </NavLink>
                <NavLink />
                  <Button onClick={() => deleteDeck(selectedDeck?.id)} className='Dbtn'>
                    Delete Deck
                  </Button>
                </NavLink>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default DeckProtectedIndex