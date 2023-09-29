import { render, screen } from '@testing-library/react';
import CardEdit from '../pages/CardEdit';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockCards from "../mockCards";
  
const renderEdit = () => {
    render(
      <MemoryRouter initialEntries={["/cardedit/1"]}>
        <Routes>
          <Route path="/cardedit/:id" element={<CardEdit cards={mockCards} />} />
        </Routes>
      </MemoryRouter>
    )
  }
  
  describe('<CardEdit />', () => {
    it("renders the CardEdit page for the user", () => {
      renderEdit()
      const editLink = screen.toBeInTheDocument()('link', {
        name: /edit card/i
      })
      expect(editLink).toBeInTheDocument()
  
      const submitButton = screen.getByRole('button', { name: /submit/i })
      expect(submitButton).toBeInTheDocument()
    })
  
    it("has a form with entries for question and answer", () => {
      renderEdit()
  
      const formQuestion = screen.getByText("question")
      expect(formQuestion.getAttribute("for")).toEqual("question")
  
      const formAnswer = screen.getByText("Answer")
      expect(formAnswer.getAttribute("for")).toEqual("answer")
    })
  })