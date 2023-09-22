import React from "react";
import "./Header.css";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = ({ currentUser }) => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/" >
            Home Page
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/decks">All Decks</NavLink>
        </NavItem>
        {currentUser && (
          <>
            <NavItem>
              <NavLink to="/mydecks">
                My Decks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/deck/new">
                Add Deck
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">
                Sign Out
              </NavLink>
            </NavItem>
          </>
        )}

        {!currentUser && (
          <>
            <NavItem>
              <NavLink to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
          </>
        )}

        <NavItem>
          <NavLink to="/aboutus">
            About Us
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default Header;
