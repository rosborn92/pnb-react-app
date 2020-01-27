import styled from 'styled-components'

const StyledPhotoBox = styled.div`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  background-color: #BECCDA;
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
      color: #053A92;
    }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  `
export default StyledPhotoBox
