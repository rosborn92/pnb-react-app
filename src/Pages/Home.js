import React from "react";
import styled from "styled-components";
import PhotoBox from "../PhotoBox/PhotoBox";

const Home = () => (
    <>
        <StyledHome>
            <img src="logo.png" alt="" />
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

    img {
        width: 40%;
        margin: 0;
    }
`;
