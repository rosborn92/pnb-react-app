import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CollapseMenu = (props) => {
    if (props.navOpen === true) {
        return (
            <CollapseWrapper
                id="menuItems"
            >
                <li><Link onClick={props.handleNav} to="/">HOME</Link></li>
                <li><Link onClick={props.handleNav} to="/About">ABOUT</Link></li>
                <li><Link onClick={props.handleNav} to="/Menu">MENU</Link></li>
                <li><Link onClick={props.handleNav} to="/Pies">PIES</Link></li>
                <li><Link onClick={props.handleNav} to="/Press">PRESS</Link></li>
                <li><Link onClick={props.handleNav} to="/Catering">CATERING</Link></li>
                <li><Link onClick={props.handleNav} to="/FoodTruck">FOOD TRUCK</Link></li>
            </CollapseWrapper>
        );
    }
    return null;
};

export default CollapseMenu;

const CollapseWrapper = styled.ul`
    background: #beccda;
    position: fixed;
    top: 60px;
    right: 0;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    width: 200px;
    border: 7px solid #053a92;
    border-radius: 20px;
    text-align: center;
    z-index: 1;

    li {
        list-style: none;
        border-bottom: 2px solid;
        
        &:last-child {
            border-bottom: none;
        }
        
        & a {
            color: #053a92;
            width: 100%;
            font-size: 20px;
            line-height: 35px;
            text-decoration: none;
            cursor: pointer;
            font-weight: bold;
        }

        &:hover {
            background: #053a92;
            & a {
                color: #dfe6e9;
            }
        }
    }
    
    @media (min-width: 769px) {
        /* for displays smaller than 768px */
        display: none;
    }
`;
