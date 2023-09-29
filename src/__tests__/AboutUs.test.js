import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import mockDecks from "../mockDecks"
import mockCards from "../mockCards";

describe("<AboutUs />", () => {

    const rendering = () => {
        render(
            <BrowserRouter>
              <AboutUs />
            </BrowserRouter>
        )
    }

    it("renders without crashing", () => {
        rendering()
    })

    it("renders heading", () => {
      rendering()
      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    })

    it("renders heading", () => {
      rendering()
      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument()
    })

    it("renders paragraph texts on screen", () => {
      rendering()
      const name = screen.getByText("Bao Khanh Tran")
      expect(name).toBeInTheDocument()
    })

    it("renders Meet Our Team", () => {
      rendering()
      const team = screen.getByRole('heading', {name: /meet our team/i})
      expect(team).toBeInTheDocument()
    })
})