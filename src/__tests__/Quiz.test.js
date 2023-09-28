import { render, screen } from '@testing-library/react'
import Quiz from '../pages/Quiz'
import { Route, Routes, MemoryRouter } from 'react-router-dom'
import mockDecks from '../mockDecks'
import mockCards from '../mockCards'

describe("<Quiz />", () => {
  const readCard = (deck_id) => {
    return
  }
  it("renders the Deck Edit page", () => {
    render(
      <MemoryRouter initialEntries={["/decks/1/quiz"]}>
        <Routes>
          <Route path="/decks/:deck_id/quiz" element={<Quiz decks={mockDecks} cards={mockCards} readCard={readCard} />} />
        </Routes>
      </MemoryRouter>
    )
    const element = screen.getByText("Honor System")
    expect(element).toBeInTheDocument()
  })

  it("renders the Correct Button", () => {
    render(
      <MemoryRouter initialEntries={["/decks/1/quiz"]}>
        <Routes>
          <Route path="/decks/:deck_id/quiz" element={<Quiz decks={mockDecks} cards={mockCards} readCard={readCard} />} />
        </Routes>
      </MemoryRouter>
    )
    const button1 = screen.getByRole("button", { name: "Correct"})
    expect(button1).toBeInTheDocument()
  })

  it("renders the Correct Button", () => {
    render(
      <MemoryRouter initialEntries={["/decks/1/quiz"]}>
        <Routes>
          <Route path="/decks/:deck_id/quiz" element={<Quiz decks={mockDecks} cards={mockCards} readCard={readCard} />} />
        </Routes>
      </MemoryRouter>
    )
    const button1 = screen.getByRole("button", { name: "Wrong"})
    expect(button1).toBeInTheDocument()
  })

  it("renders an image Button", () => {
    render(
      <MemoryRouter initialEntries={["/decks/1/quiz"]}>
        <Routes>
          <Route path="/decks/:deck_id/quiz" element={<Quiz decks={mockDecks} cards={mockCards} readCard={readCard} />} />
        </Routes>
      </MemoryRouter>
    )
    const image = screen.getByRole("img", { name: "quiz lizard"})
    expect(image).toBeInTheDocument()
  })

  it("renders the heading ", () => {
    render(
      <MemoryRouter initialEntries={["/decks/1/quiz"]}>
        <Routes>
          <Route path="/decks/:deck_id/quiz" element={<Quiz decks={mockDecks} cards={mockCards} readCard={readCard} />} />
        </Routes>
      </MemoryRouter>
    )
    const header = screen.getByRole("heading", { level: 1})
    expect(header).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    render(
      <MemoryRouter initialEntries={["/decks/1/quiz"]}>
        <Routes>
          <Route path="/decks/:deck_id/quiz" element={<Quiz decks={mockDecks} cards={mockCards} readCard={readCard} />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('left-arrow')).toBeInTheDocument()
    
    expect(screen.getByTestId('right-arrow')).toBeInTheDocument()
    
  });
})