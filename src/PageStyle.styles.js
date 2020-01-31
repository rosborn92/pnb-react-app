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
  .info2 {
    text-align: center;
    width: 75%;
    margin: 0 auto;
  }
  .wideColumn {
    margin: 15px auto;
    padding: 2%;
    width: 90%;
    background-color: #eff2f6;
    /* width: 57%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    margin: 5px 15px 5px 0; */
  }

  .wideColumnRt {
    margin: 15px auto;
    padding: 2%;
    width: 90%;
    max-width: 445px;
    /* text-align: left; */
    /* max-width: 562px; */
    /* min-width: 460px; */
    background-color: #eff2f6;
    /* object-fit: cover; */
  }

    /* justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    width: 57%;
    margin: 5px 0 5px 15px;
     */
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
    margin: 15px 5px;
    padding: 1%;
    width: 49%;
    background-color: #eff2f6;
  }

  .cardBox {
    display: flex;
    margin: 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .videoCard {
    width: 570px;
    height: 325px;
    margin: 20px 10px;
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
    text-align: left;
    background-color: #eff2f6;
    /* object-fit: cover; */
  }
  .longColumn {
      margin: 15px auto;
      padding: 2%;
      width: 90%;
      background-color: #eff2f6;
  }

  .smallSection {
    margin: 15px auto;
    padding: 2%;
    width: 90%;
    background-color: #eff2f6;
    /* object-fit: cover; */
  }
  .text {
    /* width: fit-content; */
    display: block;
  }
  .fittedSection {
    margin: 0 auto;
    text-align: left;
    width: fit-content;
    max-width: 95%;
  }
  .imgSection {
    margin: 15px auto;
    padding: 2%;
    background-color: #eff2f6;
    width: 60%;
  }

  h5 {
    font-size: 18px;
    text-align: center;
    &.borderedFull {
      border-bottom: 2px solid;
      /* border-top: 2px solid; */
      width: fit-content;
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
      width: fit-content;
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
    /* width: fit-content; */
    &.lgText{
      font-size: 24px;
      margin: 20px 0;
    }
    &.menuItem{
      /* display: inline; */
      text-align: right;
    }
  }
  ul {
    padding-left: 4%;
    margin: auto;
    text-align: left;
  }
  li {
    margin: auto;
  }
  @media (max-width: 768px) {
    /* for displays larger than 768px */

    .slimColumn,
    .splitColumn,
    .slimCateringColumn {
      display: none;
    }
    /* display: none; */
  }
  @media (min-width: 769px) {
    /* for displays smaller than 768px */
    ul {
      margin: 0;
    }
    .text {
      display: -webkit-inline-box;
    }
    .wideColumnRt {
      justify-content: space-evenly;
      display: flex;
      flex-direction: column;
      /* width: 57%; */
      max-width: none;
      margin: 5px 0 5px 15px;
    }
    .section {
      text-align: unset;
    }
    .fittedSection {
      justify-content: space-evenly;
      display: flex;
      flex-direction: column;
      /* width: 57%; */
      /* margin: 5px 0 5px 15px; */
    }
    .wideColumn {
      width: 57%;
      justify-content: space-between;
      display: flex;
      flex-direction: column;
      margin: 5px 15px 5px 0;
    }
    .info2,
    .longColumn,
    .imgSection {
      display: none;
    }
  }

`

export default PageStyle
