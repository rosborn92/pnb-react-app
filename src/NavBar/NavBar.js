import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const NavBar = (props) => {
    return (
        <>
            <NavContainer>
                <img
                    src="logo.png"
                    alt=""
                    style={{ width: "60px", margin: "auto auto auto 35px" }}
                />
                <NavLinks>
                    <li><NavLink exact to="/">HOME</NavLink></li>
                    <li><NavLink to="/About">ABOUT</NavLink></li>
                    <li><NavLink to="/Menu">MENU</NavLink></li>
                    <li><NavLink to="/Pies">PIES</NavLink></li>
                    <li><NavLink to="/Press">PRESS</NavLink></li>
                    <li><NavLink to="/Catering">CATERING</NavLink></li>
                    <li><NavLink to="/FoodTruck">FOOD TRUCK</NavLink></li>
                </NavLinks>
                <BurgerWrapper>
                    <BurgerMenu
                        navOpen={props.navOpen}
                        handleNav={props.handleNav}
                    />
                </BurgerWrapper>
                <CollapseMenu navOpen={props.navOpen} handleNav={props.handleNav} />
            </NavContainer>
        </>
    );
};

export default NavBar;

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
    z-index: 1;
`;

const NavLinks = styled.ul`
    margin: auto 0 auto auto;

    display: flex;

    li {
        list-style: none;
        border-bottom: 2px solid;
        
        & a {
            color: #053a92;
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
                background: #053a92;
            }
    
            @media (max-width: 768px) {
                /* for displays larger than 768px */
                display: none;
            }
        } 

        & .active {
            color: #fdcb6e;
                background: #053a92;
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
