import { render, screen } from '@testing-library/react';
import CardNew from '../pages/CardNew'
import { BrowserRouter } from 'react-router-dom';

describe("<CardNew />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <CardNew />
        </BrowserRouter>
      )
    })
  
    it("renders the Card New page", () => {
      const element = screen.getByText("Create A Card")
      expect(element).toBeInTheDocument()
    })

    it("has a form with entries: question, answer", () => {
        const formQuestion = screen.getByText("Question:")
        expect(formQuestion.getAttribute("for")).toEqual("question")
    
        const formAnswer = screen.getByText("Answer:")
        expect(formAnswer.getAttribute("for")).toEqual("answer")

    })
})