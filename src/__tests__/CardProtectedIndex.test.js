import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import CardProtectedIndex from "../pages/CardProtectedIndex"
import mockCards from '../mockCards.js'
import mockDecks from "../mockDecks"

describe("<CardProtectedIndex />", () => {
  const readCard = () => {
    return 
  }
  const deleteCard = () => {
    return
  }
  const currentUser = () => {
    return
  }
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/mydecks/1"]}>
        <Routes>
        <Route path={`/mydecks/:deck_id`} element={<CardProtectedIndex decks={mockDecks} cards={mockCards} currentUser={currentUser} readCard={readCard} deleteCard={deleteCard} />} />
        </Routes>
      </MemoryRouter>
    )
    const header = screen.getByRole('heading', {
      level: 1
    })
    expect(header).toBeInTheDocument()
    
  })
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/mydecks/1"]}>
        <Routes>
        <Route path={`/mydecks/:deck_id`} element={<CardProtectedIndex decks={mockDecks} cards={mockCards} currentUser={currentUser} readCard={readCard} deleteCard={deleteCard} />} />
        </Routes>
      </MemoryRouter>
    )
    const button = screen.getByRole('button', {
      name: 'Create Card'
    })
    expect(button).toBeInTheDocument()
  })
})