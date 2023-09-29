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
  })

  it("Shows an image", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const img = screen.getByRole('img', {
      name: /signup\-liz/i
    })
    expect(img).toBeVisible()
  })

  it("has an input field", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const email = screen.getByRole('textbox')
    expect(email).toBeInTheDocument()
    expect(email).toHaveValue("")
  })

  it("has placeholder text in the input", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const pw = screen.getByPlaceholderText(/confirm password/i)
    expect(pw).toBeInTheDocument()
  })

  it("Submits the form", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const submit = screen.getByRole('button', {
      name: /submit/i
    })
    expect(submit).toBeInTheDocument()
  })

});