import React from 'react'
import StyledNavBar from './NavBar.styles'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <StyledNavBar>
    <img src="logo.png" alt="Company Logo" />

    <Link to="/">HOME</Link>

    <Link to="/About">ABOUT</Link>

    <Link to="/Menu">MENU</Link>

    <Link to="/Pies">PIES</Link>

    <Link to="/Press">PRESS</Link>

    <Link to="/Catering">CATERING</Link>

    <Link to="/FoodTruck">FOOD TRUCK</Link>

  </StyledNavBar>
)

export default NavBar
