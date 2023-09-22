import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CardProtectedIndex from "../pages/CardProtectedIndex"
import mockCards from '../mockCards.js'

describe("<ProtectedCardIndex />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <CardProtectedIndex cards={mockCards}/>
        </BrowserRouter>
      )
      const greeter = screen.getByText("My Cards")
      expect(greeter).toBeInTheDocument()
    })
     
  })