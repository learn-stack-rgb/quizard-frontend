import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import DeckProtectedIndex from "../pages/DeckProtectedIndex"
import mockDecks from '../mockDecks.js'

describe("<ProtectedDeckIndex />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <DeckProtectedIndex decks={mockDecks}/>
        </BrowserRouter>
      )
      const greeter = screen.getByText("My Decks")
      expect(greeter).toBeInTheDocument()
    })
     
  })