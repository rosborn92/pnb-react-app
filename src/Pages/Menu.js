import React from "react";
import styled from "styled-components";
import Jumbotron from "../Jumbotron.styles";
// import ReactImageAppear from "react-image-appear";

const Menu = () => (
  <>
    <title>Menu Page - Call for more details</title>
    <Jumbotron src="backcounter.jpg" alt="picture of pie n burger menu and pie case"/>
    <PageStyle>
      <h1>MENU</h1>
      <div className="menuContainer">
        <StyledMenu src="breakfastMenu.png" alt="PNB Breakfast Menu" />
        <StyledMenu src="lunchMenu.png" alt="PNB Lunch & Dinner Menu" />
        <StyledMenu src="kidsBreakfast.png" alt="Kids Breakfast Menu" />
        <StyledMenu src="kidsLunch.png" alt="Kids Lunch & Dinner Menu" />
      </div>
    </PageStyle>
  </>
);

export default Menu;

const PageStyle = styled.div`
  padding: 30px 0;
  text-align: center;
  .box {
    padding: 3%;
  }
  .menuContainer {
    display: flex;
    flex-direction: column;
    padding: 3% 10%;
    align-items: center;
  }
  h1 {
    font-size: 30px;
    text-align: center;
    padding: 10px;
    /* width: fit-content; */
    border-bottom: 2px solid;
    border-top: 2px solid;
    margin: auto;
    background-color: #eff2f6;
  }
`;

// const StyledMenu = styled(ReactImageAppear)`
const StyledMenu = styled.img`
  max-width: 800px;
  margin: 30px auto;
  width: 95%;
  background-color: #beccda !important;
`;
