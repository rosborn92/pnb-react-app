import React from 'react'
import styled from 'styled-components'
import InstaLink from './InstaLink'
import TwitterLink from './TwitterLink'

const LgFooter = () => {
  return(
    <StyledLgFooter>
      <div className="row">
        <div className="column">
          <h4> LOCATION </h4>
          <span> 913 E. California Blvd. </span>
          <span> Pasadena, CA 91106 </span>
          <span> (626)795-1123 </span>
        </div>
        <div className="column2">
          <img className="logo" src="logo.png" />
          <div className="links" >
            <InstaLink />
            <TwitterLink />
          </div>
        </div>
        <div className="column">
          <h4> HOURS </h4>
          <span> Sun - Thurs: 7am - 9pm </span>
          <span> Fri & Sat: 7am - 10pm </span>
        </div>
      </div>
      <span className="footer"> © PIE 'N BURGER 2020</span>
    </StyledLgFooter>
  )
}

export default LgFooter

  const StyledLgFooter = styled.footer`
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
    width: 38%;
    padding-top: 30px;
  }

  .column2 {
    width: 24%;
    padding-top: 15px;
  }

  .footerdiv {
    margin-top: 15px;
    padding: 0;
    bottom: 0;
    width: 100%;
  }

  img {
    width: 45px;
    &.logo {
      width: 90px;
    }
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

  @media (max-width: 600px) {
    /* for displays larger than 768px */
    display: none;
  }
`
