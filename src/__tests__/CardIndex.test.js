import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CardIndex from "../pages/CardIndex";
import mockDecks from "../mockDecks"
import mockCards from "../mockCards";

describe("<CardIndex />", () => {
    const readCard = () => {
        return
    }

    const rendering = () => {
        render(
            <MemoryRouter initialEntries={["/decks/1"]}>
                <Routes>
                    <Route path="/decks/:deck_id" element={<CardIndex decks={mockDecks} cards={mockCards} readCard={readCard} />} />
                </Routes>
            </MemoryRouter>
        )
    }

    it("renders without crashing", () => {
        rendering()
    })

    it("renders heading", () => {
        rendering()
        expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument()
    })
})