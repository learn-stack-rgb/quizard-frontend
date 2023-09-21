import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"

describe("<Home />", () => {
    it("Shows the Home screen without errors", () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      const greeter = screen.getByText("QUIZARD")
      expect(greeter).toBeInTheDocument()
    })
     
  })