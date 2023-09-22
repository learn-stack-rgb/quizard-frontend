import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import SignUp from "../pages/SignUp"

describe("<SignUp />", () => {
    it("Shows the page with no errors", () => {
      render(
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      )
      const greeter = screen.getByText(/sign up/i)
      expect(greeter).toBeInTheDocument()
    })
     
  });