import { render, screen } from "@testing-library/react";
import DeckEdit from "../pages/DeckEdit";
import mockDecks from "../mockDecks";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import mockUsers from "../mockUsers";

describe("<DeckEdit />", () => {
  const updateDeck = () => {
    return
  }
  
  const renderEdit = () => {
    render(
      <MemoryRouter initialEntries={[`/mydecks/1/edit`]}>
        <Routes>
          <Route
            path={`/mydecks/:deck_id/edit`}
            element={
              <DeckEdit
                decks={mockDecks}
                currentUser={mockUsers[0]}
                updateDeck={updateDeck}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    )
  }

  it("renders the Deck Edit page", () => {
    renderEdit()
    const element = screen.getByText("Edit Deck")
    expect(element).toBeInTheDocument()
  })

  it("displays the current title in the title input field", () => {
    renderEdit()
    const titleInput = screen.getByLabelText('Title') 
    expect(titleInput.value).toBe(mockDecks[0].title)  
})

it("renders the 'Submit Change' button", () => {
  renderEdit()
  const submitButton = screen.getByText('Submit Change')
  expect(submitButton).toBeInTheDocument()
})



  it("renders the image on the Deck Edit Page", () => {
    renderEdit()
    const image = screen.getByAltText("wiz-liz-tail")
    expect(image).toBeInTheDocument()
  })
})


