import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import userEvent from "@testing-library/user-event";

describe("<Header />", () => {
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Login"));
    expect(screen.getByText("Login")).toBeInTheDocument();
    userEvent.click(screen.getByText("Sign Up"));
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    userEvent.click(screen.getByText("Home Page"));
    expect(screen.getByText("Home Page")).toBeInTheDocument();
  });
});
