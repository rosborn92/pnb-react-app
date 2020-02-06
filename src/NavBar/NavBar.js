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
  /* position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem; */

  background: rgba(226, 232, 238, 0.9);
  width: 100%;
  /* background: rgba(5, 58, 146, 0.9); */
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-align-items: center;
  /* justify-content: flex-end; */
  height: 60px;

  /* img {
    width: 60px;
  } */
`;

// const FlexContainer = styled.div`
//   max-width: 120rem;
//   display: flex;
//   margin: auto;
//   padding: 0 2rem;;
//   justify-content: space-between;
//   height: 5rem;
// `;

const NavLinks = styled.div`
  /* justify-self: end; */
  /* list-style-type: none; */
  margin: auto 0 auto auto;
  /* justify-content: flex-end; */


  & a {
    color: #053A92;
    font-weight: bold;
    /* border-bottom: 1px solid transparent; */
    margin: 0;
    padding: 0 10px;
    /* transition: all 300ms linear 0s; */
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
  /* margin:; */
  margin-left: auto;
  @media (min-width: 769px) {
    /* for displays smaller than 768px */
    display: none;
  }
`;
