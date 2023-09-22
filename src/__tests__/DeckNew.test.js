import { render, screen } from '@testing-library/react'
import DeckNew from '../pages/DeckNew'
import { BrowserRouter } from 'react-router-dom'
import mockUsers from '../mockUsers.js'

describe("<DeckNew />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <DeckNew currentUser={mockUsers[0]}/>
        </BrowserRouter>
      )
    })
  
    it("renders the Deck New page", () => {
      screen.logTestingPlaygroundURL()
      const element = screen.getByText("Add A New Deck")
      expect(element).toBeInTheDocument()
    })

})