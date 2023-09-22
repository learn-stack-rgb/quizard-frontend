import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignIn from "../pages/SignIn"

describe("<SignIn />", () => {
    it("Shows the page with no errors", () => {
      render(
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      )
      const greeter = screen.getByText(/log in/i)
      expect(greeter).toBeInTheDocument()
    })
     
  });