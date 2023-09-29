import { render, screen } from '@testing-library/react'
import DeckNew from '../pages/DeckNew'
import { BrowserRouter } from 'react-router-dom'
import mockUsers from '../mockUsers.js'

describe("<DeckNew />", () => {
  it("renders the Deck New page", () => {
    render(
      <BrowserRouter>
        <DeckNew currentUser={mockUsers[0]} />
      </BrowserRouter>
    )
    const element = screen.getByText("Add A New Deck")
    expect(element).toBeInTheDocument()
  })

  it("renders an image", () => {
    render(
      <BrowserRouter>
        <DeckNew currentUser={mockUsers[0]} />
      </BrowserRouter>
    )
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })

  it("renders a text box", () => {
    render(
      <BrowserRouter>
        <DeckNew currentUser={mockUsers[0]} />
      </BrowserRouter>
    )
    const txtBox = screen.getByRole('textbox', {
      name: /title of deck/i
    })
    expect(txtBox).toBeInTheDocument()
  })

  it("renders a button", () => {
    render(
      <BrowserRouter>
        <DeckNew currentUser={mockUsers[0]} />
      </BrowserRouter>
    )
    const btn = screen.getByRole('button', {
      name: /create!/i
    })
    expect(btn).toBeInTheDocument()
  })

})



