import { render, screen } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import App from "../App"
import Footer from "../components/Footer"
import Header from "../components/Header"
import userEvent from "@testing-library/user-event"
import SignIn from "../pages/SignIn"

describe("<App />", () => {
  const renderApp = () => {
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  }

  it("renders App without crashing", () => {
    renderApp()
  })

  it("renders Footer without crashing", () => {
    renderApp()
    render(<Footer />)
  })

  it("renders Header without crashing", () => {
    renderApp()
    render(
      <BrowserRouter>
       <Header />
      </BrowserRouter>
    )
  })
})