import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const NavBar = (props) => {
    return (
        <>
            <NavContainer>
                <img
                    src="logo.png"
                    alt="pnb logo"
                    style={{ width: "60px", margin: "auto auto auto 35px" }}
                    role="presentation"
                />
                <NavLinks>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/About">ABOUT</Link></li>
                    <li><Link to="/Menu">MENU</Link></li>
                    <li><Link to="/Pies">PIES</Link></li>
                    <li><Link to="/Press">PRESS</Link></li>
                    <li><Link to="/Catering">CATERING</Link></li>
                    <li><Link to="/FoodTruck">FOOD TRUCK</Link></li>
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

// const NavLinks = styled.div`
const NavLinks = styled.ul`
    margin: auto 0 auto auto;

    // new:
    // width: 100%;
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
    }

`;

const BurgerWrapper = styled.div`
    margin-left: auto;
    @media (min-width: 769px) {
        /* for displays smaller than 768px */
        display: none;
    }
`;
