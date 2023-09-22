import React from "react";
import './CardIndex.css' 
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const CardIndex = ({ cards }) => {
  const {deckId} = useParams()
  
  return (
    <>
      {cards.map((card, index) => (
        <div key={index}>
          <Card style={{ width: '18rem' }}>
            <img alt="Sample" src={card.image} /> {/* It seems you intended card.image to be dynamic */}
            <CardBody>
              <CardTitle tag="h5">{card.question}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
              <CardText></CardText>
              <NavLink to={`/decks/${card.id}`}>
                <Button>Button Text</Button> {/* Add your desired button text */}
              </NavLink>
            </CardBody>
          </Card>
        </div>
      ))}
    </>
  )
}

export default CardIndex;




