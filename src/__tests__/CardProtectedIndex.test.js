import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import CardProtectedIndex from "../pages/CardProtectedIndex"
import mockCards from '../mockCards.js'
import mockDecks from "../mockDecks"

describe("<CardProtectedIndex />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/mydecks/1/mycards"]}>
        <Routes>
          <Route path="/mydecks/:deck_id" element= {<CardProtectedIndex cards={mockCards} decks={mockDecks} />} />
        </Routes>
      </MemoryRouter>
    )
    const button = screen.getByRole('button', {
      name: /edit/i
    })
    expect(button).toBeInTheDocument()
  })

})