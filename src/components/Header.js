import React from "react";
import "./Header.css";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import lizHouse from '../assets/liz-house-fotor-bg-remover-20230927203955.png'

const Header = ({ currentUser, logout }) => {

  return (

    <Nav className='nav-container' >

      <div className="nav-container-child"> 
        <div className="nav-item-container" >
          <NavItem className='nav-item'>
            <NavLink to="/" >
              <img className='liz-house' src={lizHouse} />
            </NavLink>
          </NavItem>
        </div>
      </div>  

      <div className="nav-container-child">
        {currentUser && (
          <>
            <div className="nav-item-container">
              <NavItem className='nav-item'>
                <NavLink className='nav-link' to="/decks">
                  All Decks
                </NavLink>
              </NavItem>
            </div>
            <div className="nav-item-container">
              <NavItem className='nav-item'>
                <NavLink className='nav-link' to="/mydecks">
                  My Decks
                </NavLink>
              </NavItem>
            </div>

            <div className="nav-item-container">
              <NavItem className='nav-item'>
                <NavLink className='nav-link' to="/decknew">
                  Add Deck
                </NavLink>
              </NavItem>
            </div>

            <div className="nav-item-container">
              <NavItem className='nav-item'>
                <NavLink className='nav-link' to="/" onClick={() => logout()}>
                  Sign Out
                </NavLink>
              </NavItem>
            </div>
          </>
        )}

        {!currentUser && (
          <>
            <div className="nav-item-container" >
              <NavItem className='nav-item'>
                <NavLink className='nav-link' to="/login">
                  Login
                </NavLink>
              </NavItem>
            </div>

            <div className="nav-item-container" >
              <NavItem className='nav-item'>
                <NavLink className='nav-link' to="/signup">
                  Sign Up
                </NavLink>
              </NavItem>
            </div>
          </>
        )}
        <div className="nav-item-container" >
          <NavItem className='nav-item'>
            <NavLink className='nav-link' to="/aboutus">
              Meet The Team!
            </NavLink>
          </NavItem>
        </div>
      </div>
    </Nav>

  );
};

export default Header;
