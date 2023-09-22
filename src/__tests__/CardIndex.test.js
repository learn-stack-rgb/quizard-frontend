import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardIndex from "../pages/CardIndex";
import mockCards from "../mockCards"

describe ("<CardIndex>", () => {
    it("renders without crashing", () => {})
    it ("renders cards in decks without crashing", () => {
        render(
            <BrowserRouter>
                <CardIndex decks={mockCards}/>
            </BrowserRouter>
        )
        const images = screen.getAllByRole("img")
        expect(images).toHaveLength(mockCards.length)
   
    })
})