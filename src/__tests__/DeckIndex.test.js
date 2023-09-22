import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DeckIndex from "../pages/DeckIndex";
import mockDecks from "../mockDecks";

describe ("<DeckIndex>", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <DeckIndex decks={mockDecks}/>
            </BrowserRouter>
        )
        const images = screen.getAllByRole("img")
        expect(images).toHaveLength(mockDecks.length)
   
    })
    
})