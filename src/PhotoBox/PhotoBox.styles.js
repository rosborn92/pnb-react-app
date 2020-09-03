import styled from "styled-components";

const StyledPhotoBox = styled.div`
    display: flex;
    margin: 0;
    flex-wrap: wrap;
    background-color: #beccda;
    padding: 1%;
    justify-content: space-evenly;

    .card {
        width: 47%;
        margin: 1%;
        background-color: #eff2f6;
    }

    span {
        font-size: 16px;
        text-align: center;
        color: #053a92;
    }
`;
export default StyledPhotoBox;
