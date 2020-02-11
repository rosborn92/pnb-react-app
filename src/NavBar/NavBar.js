import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

const NavBar = (props) => {
  return (
    <>
      <NavContainer>
        <img src="logo.png" alt="" style={{width:"60px", margin:"auto auto auto 35px"}}/>
        <NavLinks>
          <Link to="/">HOME</Link>
          <Link to="/About">ABOUT</Link>
          <Link to="/Menu">MENU</Link>
          <Link to="/Pies">PIES</Link>
          <Link to="/Press">PRESS</Link>
          <Link to="/Catering">CATERING</Link>
          <Link to="/FoodTruck">FOOD TRUCK</Link>
        </NavLinks>
        <BurgerWrapper>
          <BurgerMenu
            navOpen={props.navOpen}
            handleNav={props.handleNav}
          />
        </BurgerWrapper>
      </NavContainer>
      <CollapseMenu
        navOpen={props.navOpen}
        handleNav={props.handleNav}
      />
    </>
  )
}

export default NavBar

const NavContainer = styled.nav`
  background: rgba(226, 232, 238, 0.9);
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-align-items: center;
  height: 60px;
`;

const NavLinks = styled.div`
  margin: auto 0 auto auto;

  & a {
    color: #053A92;
    font-weight: bold;
    margin: 0;
    padding: 0 10px;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 2px solid;
    border-top: 2px solid;
    font-size: 21px;

    &:hover {
      color: #fdcb6e;
      background: #053A92;
    }

    @media (max-width: 768px) {
      /* for displays larger than 768px */
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin-left: auto;
  @media (min-width: 769px) {
    /* for displays smaller than 768px */
    display: none;
  }
`;
