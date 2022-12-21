import React from "react";
import styled from "styled-components";
import PhotoBox from "../PhotoBox/PhotoBox";

const Home = () => (
    <>
        <title>Home Page</title>
        <StyledHome>
        <h1>Home</h1>
            <img src="logo.png" alt="pnb logo" />
        </StyledHome>
        <PhotoBox />
    </>
);

export default Home;

const StyledHome = styled.div`
    color: #053a92;
    background-image: url("counter.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    text-align: center;
    padding-top: 60px;

    h1 {
        border: 0;
        clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
        clip; rect(1px, 1px, 1px, 1px);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px; 
    }

    img {
        width: 40%;
        margin: 0;
    }
`;
