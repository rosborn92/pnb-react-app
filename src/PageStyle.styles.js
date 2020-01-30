import styled from 'styled-components'

const PageStyle = styled.div`
  /* font-family: 'Roboto Mono', monospace; */
  margin: 0;
  width: 100%;
  background-color: #BECCDA;
  padding: 30px 0;
  color: #053A92;
  text-align: center;

  .box {
    display: flex;
    padding: 2%;
    justify-content: space-between;
  }
  .info {
    text-align: center;
    width: 75%;
    margin: 0 auto;
  }
  .wideColumn {
    width: 57%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    background-color: #eff2f6;
    margin: 5px 15px 5px 0;
    padding: 2%;
    /* object-fit: cover; */
  }

  .wideColumnRt {
    text-align: left;
    width: 57%;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    background-color: #eff2f6;
    margin: 5px 0 5px 15px;
    padding: 2%;
    object-fit: cover;
  }
  .slimColumn {
    width: 41%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .slimCateringColumn {
    width: 41%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .splitColumn {
    padding: 0;
    width: 49%;
    display: flex;
    text-align: left;
    justify-content: space-between;
  }

  .cardBox {
    display: flex;
    margin: 0;
    flex-wrap: wrap;
    padding: 1%;
    justify-content: space-evenly;
  }

  .videoCard {
    width: 570px;
    height: 325px;
    margin: 20px 10px;
    background-color: #eff2f6;
  }

  iframe {
    width: 100%;
    height: 100%;
    padding: auto;
  }

  .copyright {
    font-size: 10px;
    span {
      font-size: 10px;
      display: inline;
    }
  }
  .lineBreak {
    height: 2px;
    margin: 2px auto;
    border-bottom: 2px solid #053A92;
    width: 70%;
  }
  .section {
    margin: 5px 0;
    padding: 2%;
    background-color: #eff2f6;
    object-fit: cover;
  }

  h5 {
    font-size: 18px;
    text-align: center;
    &.borderedFull {
      border-bottom: 2px solid;
      /* border-top: 2px solid; */
      width: max-content;
      margin: 20px auto;
    }
    &.banner {
      border-bottom: 2px solid;
      border-top: 2px solid;
      width: 100%;
      font-size: 26px;
      background-color: #eff2f6;

    }
    &.borderedHeader {
      border-bottom: 2px solid;
      /* border-top: 2px solid; */
      width: max-content;
      margin: 0 auto 20px auto;
    }
  }
  h4 {
    font-size: 28px;
    text-align: center;
    &.pgHeader {
      text-decoration: underline;
    }
    &.bordered {
      width: max-content;
      border-bottom: 2px solid;
      border-top: 2px solid;
      margin: 30px auto;
    }
  }
  img {
    width: 100%;
    &.menus {
      max-width: 600px;
      height: auto;
      margin-top: 50px;
    }
  }
  br {
    height: 8px;
  }
  span {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
    &.lgText{
      font-size: 24px;
      margin: 20px 0;
    }
  }
  ul {
    padding-left: 4%;
    margin: 0;
    text-align: left;
  }
  li {
    margin: 0 0 0 10px;
    /* list-style-type: circle; */
    /* list-style-position: inside; */
    /* margin-bottom: 5px; */
  }
  @media (max-width: 768px) {
    /* for displays larger than 768px */
    display: none;
  }
`

export default PageStyle
