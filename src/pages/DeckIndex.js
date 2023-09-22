import React from "react";
import { NavLink } from "react-router-dom"
import { CardGroup,Card,CardBody,CardTitle,Button} from "reactstrap";
import './Deckindex.css' 

const DeckIndex = ({ decks }) => {
  return (
    <CardGroup>
      {decks.map((deck) => (
        <Card key={deck.id}>
          
          <CardBody>
            <CardTitle tag="h5">{deck.title}</CardTitle>
            <NavLink to={`/decks/${deck.id}`}>
              <Button>View Deck</Button>
            </NavLink>
          </CardBody>
        </Card>
      ))}
    </CardGroup>
  )
}

export default DeckIndex;
