import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: white;
  /* height: 150px; */
  color: #053A92;
  text-align: center;
  padding: 0;

  .row {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .links {
    margin-top: 5px;
  }

  .column {
    width: 32%;
    padding-top: 30px;
  }

  .column2 {
    width: 32%;
    padding-top: 15px;
  }

  .footerdiv {
    margin-top: 15px;
    padding: 0;
    bottom: 0;
    width: 100%;
  }

  img {
    width: 90px;
  }

  h4 {
    margin: 10px 0;
    text-decoration: underline;
  }
  span {
    display: block;
    &.footer {
      font-size: 13px;
      margin-top: 10px;
    }
  }
`

export default StyledFooter
