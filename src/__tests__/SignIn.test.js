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

    it("Shows the page with no errors", () => {
      render(
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      )
      const img = screen.getByRole('img', {
        name: /login\-liz/i
      })
      expect(img).toBeInTheDocument()
    })

    it("Shows the page with no errors", () => {
      render(
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      )
      const email = screen.getByRole('textbox')
      expect(email).toBeInTheDocument()
    })
     
    it("Shows the page with no errors", () => {
      render(
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      )
      const submit = screen.getByRole('button', {
        name: /submit/i
      })
      expect(submit).toBeInTheDocument()
    })

    it("Shows the page with no errors", () => {
      render(
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      )
      const register = screen.getByRole('link', {
        name: /register now/i
      })
      expect(register).toBeInTheDocument()
      
    })
})
     
