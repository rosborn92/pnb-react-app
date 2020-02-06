import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const CollapseMenu = (props) => {

  if (props.navOpen === true) {
    return (
      <CollapseWrapper >
          <Link onClick={props.handleNav} to="/">HOME</Link>
          <Link onClick={props.handleNav} to="/About">ABOUT</Link>
          <Link onClick={props.handleNav} to="/Menu">MENU</Link>
          <Link onClick={props.handleNav} to="/Pies">PIES</Link>
          <Link onClick={props.handleNav} to="/Press">PRESS</Link>
          <Link onClick={props.handleNav} to="/Catering">CATERING</Link>
          <Link onClick={props.handleNav} to="/FoodTruck">FOOD TRUCK</Link>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled.div`
  background: #BECCDA;
  position: fixed;
  top: 60px;
  right: 0;
  padding: .5rem 1rem;
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 7px solid #053A92;
  border-radius: 20px;
  text-align: center;

  & a {
    border-bottom: 2px solid;
    font-size: 20px;
    width: 100%;
    line-height: 35px;
    /* color: #dfe6e9; */
    color: #053A92;
    /* text-transform: uppercase; */
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    &:last-child {
      border-bottom: none;
    }

    &:hover {
      color: #dfe6e9;
      background: #053A92;
    }
  }
  @media (min-width: 769px) {
    /* for displays smaller than 768px */
    display: none;
  }
  `;

 /* const NavLinks = styled.div` */
//   padding: 2rem 1rem 2rem 2rem;
//   display: flex;
//   flex-direction: column;
