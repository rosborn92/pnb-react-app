import React from "react";
import styled from "styled-components";
import Jumbotron from "../Jumbotron.styles";
import ReactImageAppear from "react-image-appear";

const Menu = () => (
    <>
        <Jumbotron src="backcounter.jpg" />
        <PageStyle>
            <h2>MENU</h2>
            <div className="box">
                <StyledMenu src="breakfastMenu.png" alt="PNB Breakfast Menu" />
                <StyledMenu src="lunchMenu.png" alt="PNB Lunch & Dinner Menu" />
                <StyledMenu src="kidsBreakfast.jpg" alt="Kids Breakfast Menu" />
                <StyledMenu
                    src="kidsLunch.jpg"
                    alt="Kids Lunch & Dinner Menu"
                />
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
    h2 {
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
// img {
//     max-width: 600px;
//     margin: 30px auto;
//     width: 80%;
// }

const StyledMenu = styled(ReactImageAppear)`
    max-width: 600px;
    margin: 30px auto;
    width: 100%;
`;
