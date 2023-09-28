import { render, screen } from '@testing-library/react'
import DeckEdit from '../pages/DeckEdit'
import { BrowserRouter } from 'react-router-dom'
import mockDecks from '../mockDecks'

describe("<DeckEdit />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <DeckEdit decks={mockDecks}/>
      </BrowserRouter>
    )
  })

  it("renders the Deck Edit page", () => {
    const element = screen.getByText("Edit Deck")
    expect(element).toBeInTheDocument()
  })
})