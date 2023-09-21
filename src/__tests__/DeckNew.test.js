import { render, screen } from '@testing-library/react'
import DeckNew from '../pages/DeckNew'
import { BrowserRouter } from 'react-router-dom'

describe("<DeckNew />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <DeckNew />
        </BrowserRouter>
      )
    })
  
    it("renders the Deck New page", () => {
      const element = screen.getByText("Add A New Deck")
      expect(element).toBeInTheDocument()
    })

    it("has a form with the entry title", () => {
        const formTitle = screen.getByText("Deck Title:")
        expect(formTitle.getAttribute("for")).toEqual("title")
    })
})