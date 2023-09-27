import React, { useLayoutEffect, useRef } from "react";
import "./Header.css";
import { gsap } from 'gsap'
import { Nav, NavItem } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
  const parent = useRef()
  const tl = useRef()
  const refLinks = useRef()
  const location = useLocation()

  useLayoutEffect(() => {
    if (location.pathname === "/") {
      const ctx = gsap.context(() => {
        tl.current = gsap.timeline({})
          .from(".nav-item-container", { opacity: 0, duration: 2, stagger: .5 })
      }, parent)
      return () => ctx.revert()
    }
  }, [location.pathname])

  return (

    <Nav className='nav-container' ref={parent}>

      <div className="nav-item-container" >
        <NavItem className='nav-item'>
          <NavLink to="/" >
            Home Page
          </NavLink>
        </NavItem>
      </div>

      {currentUser && (
        <>
          <div className="nav-item-container">
            <NavItem className='nav-item'>
              <NavLink to="/decks">
                All Decks
              </NavLink>
            </NavItem>
          </div>
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
          <div className="nav-item-container" >
            <NavItem className='nav-item'>
              <NavLink to="/login">
                Login
              </NavLink>
            </NavItem>
          </div>

          <div className="nav-item-container" >
            <NavItem className='nav-item'>
              <NavLink to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
          </div>
        </>
      )}
      <div className="nav-item-container" >
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
