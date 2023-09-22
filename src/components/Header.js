import React from "react";
import "./Header.css";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
  return (
    
      <Nav className='nav-container'>
        
        <div className="nav-item-container">
          <NavItem className='nav-item'>
            <NavLink to="/" >
              Home Page
            </NavLink>
          </NavItem>
        </div>
        <div className="nav-item-container">
        <NavItem className='nav-item'>
          <NavLink to="/decks">
            All Decks
          </NavLink>
        </NavItem>
        </div>

        {currentUser && (
          <>
            <div className="nav-item-container">
            <NavItem className='nav-item'>
              <NavLink to="/mydecks">
                My Decks
              </NavLink>
            </NavItem>
            </div>

            <div className="nav-item-container">
            <NavItem className='nav-item'>
              <NavLink to="/decknew">
                Add Deck
              </NavLink>
            </NavItem>
            </div>

            <div className="nav-item-container">
            <NavItem className='nav-item'>
              <NavLink to="/" onClick={logout}>
                Sign Out
              </NavLink>
            </NavItem>
            </div>
          </>
        )}

        {!currentUser && (
          <>
            <div className="nav-item-container">
            <NavItem className='nav-item'>
              <NavLink to="/login">
                Login
              </NavLink>
            </NavItem>
            </div>

            <div className="nav-item-container">
            <NavItem className='nav-item'>
              <NavLink to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
            </div>
          </>
        )}
        <div className="nav-item-container">
        <NavItem className='nav-item'>
          <NavLink to="/aboutus">
            About Us
          </NavLink>
        </NavItem>
        </div>
      </Nav>
    
  );
};

export default Header;
