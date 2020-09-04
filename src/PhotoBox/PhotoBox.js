import React from "react";
import styled from "styled-components";
import ReactImageAppear from "react-image-appear";
import StyledPhotoBox from "./PhotoBox.styles";

const PhotoBox = () => (
    <StyledPhotoBox>
        <div className="card">
            <StyledImg src="burger.jpg" alt="Plated burger and fries" />
        </div>
        <div className="card">
            <StyledImg src="cashregister.jpg" alt="PNB Cash Register" />
        </div>
        <div className="card">
            <StyledImg src="kitchen2.jpg" alt="PNB kitchen" />
        </div>
        <div className="card">
            <StyledImg src="milkshake.jpg" alt="Chocolate Milkshake" />
        </div>
        <div className="card">
            <StyledImg src="pie2.jpeg" alt="Strawberry and Peach Pie" />
        </div>
        <div className="card">
            <StyledImg
                src="counter2.jpg"
                alt="snapshot of the counter at PNB"
            />
        </div>
    </StyledPhotoBox>
);

export default PhotoBox;

const StyledImg = styled(ReactImageAppear)`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    background-color: #beccda !important;
`;
