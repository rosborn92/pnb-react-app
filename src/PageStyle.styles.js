import styled from 'styled-components'

const PageStyle = styled.div`
  margin: 0;
  width: 100%;
  background-color: #BECCDA;
  padding: 60px 0;
  color: #053A92;
  text-align: center;

  .box {
    padding: 20px;
    margin: 5%;
    background-color: #eff2f6;
    max-width: 900px;
  }
  .innerBox {
    border: 2px solid #053A92;
    padding: 10px;
    display: flex;
    background-color: #BECCDA;
    justify-content: space-between;
  }
  .info {
    text-align: center;
    width: 75%;
    margin: 80px auto;
  }
  .info2 {
    margin: 0 auto;
  }
  .wideColumn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 2%;
    width: -webkit-fill-available;
  }
  .wideColumnRt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 2%;
    width: 100%;
    text-align: left;
    max-width: 480px;
  }
  .slimColumn {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .splitColumn {
    padding: 0 2%;
    width: 50%;
  }
  .cardBox {
    display: flex;
    justify-content: center;
    padding: 0 30px 30px;
    flex-wrap: wrap;
  }
  .phone {
    display: flex;
    align-items: center;
    margin: 0;
    justify-content: center;
    img{
      width: 30px;
    }
    a{
      text-decoration: none;
    }
  }
  .videoCard {
    width: 350px;
    height: 200px;
    margin: 20px 5px;
  }
  .copyright {
    font-size: 10px;
    span {
      font-size: 10px;
      display: inline;
    }
  }
  iframe {
    width: 100%;
    height: 100%;
    padding: auto;
  }
  .section {
    padding: 10px;
    background-color: #eff2f6;
  }
  .imgSection {
    margin: 0 auto;
    padding: 2%;
    background-color: #eff2f6;
    width: 60%;
  }
  .longColumn {
    padding: 2%;
  }
  .text {
    display: block;
    margin: 10px 0;
  }
  h2 {
    font-size: 30px;
    text-align: center;
    padding: 10px;
    border-bottom: 2px solid;
    border-top: 2px solid;
    margin: auto;
    background-color: #eff2f6;
  }
  h3 {
    font-size: 26px;
    border-bottom: 2px solid;
    margin: 30px auto;
    width: fit-content;
  }
  h5 {
    font-size: 18px;
    text-align: center;
    &.borderedFull {
      border-bottom: 2px solid;
      width: fit-content;
      margin: 20px auto;
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
  a{
    display:block;
    text-decoration: none;
  }
  span {
    display: block;
    font-size: 16px;
    &.menuItem{
    }
    &.altItem{
      width: fit-content;
      margin-left: auto;
    }
  }
  ul {
    padding-left: 4%;
    margin: 0;
    text-align: left;
  }

  @media (max-width: 768px) {
    /* for displays smaller than 768px */
    .slimColumn,
    .splitColumn,
    .menuItem {
      display: none;
    }
  }
  @media (min-width: 769px) {
    /* for displays larger than 768px */
    .videoCard {
      width: 570px;
      height: 325px;
    }
    .innerBox {
      padding: 20px;
    }
    .text {
      display: -webkit-inline-box;
    }
    .wideColumnRt {
      width: fit-content;
      margin: 0 ;
      min-width: 450px;
    }
    .section {
      text-align: unset;
    }
    .info2,
    .longColumn,
    .altItem,
    .imgSection {
      display: none;
    }
  }
  @media (min-width: 1100px) {
    /* for displays larger than 1100px */
    .box {
      margin: 5% auto;
    }
  }
`

export default PageStyle
