import React, { useLayoutEffect, useRef } from "react";
import "./Header.css";
import { gsap } from 'gsap'
import { Nav, NavItem } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";
import lizHouse from '../assets/liz-house-fotor-bg-remover-20230927203955.png'

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
            <img className='liz-house' src={lizHouse} />
          </NavLink>
        </NavItem>
      </div>

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
            About Us
          </NavLink>
        </NavItem>
      </div>
    </Nav>

  );
};

export default Header;
