import React from 'react'
import styled from 'styled-components'
import InstaLink from './InstaLink'
import TwitterLink from './TwitterLink'

const SmFooter = () => {
  return(
    <StyledSmFooter>
      <div className="section">
        <img className="logo" src="logo.png" alt="" />
        <div className="links" >
          <InstaLink />
          <TwitterLink />
        </div>
      </div>
      <div className="section">
        <h4> LOCATION </h4>
        <span> 913 E. California Blvd. </span>
        <span> Pasadena, CA 91106 </span>
        <span> (626)795-1123 </span>
      </div>
      <div className="section">
        <h4> HOURS </h4>
        <span> Sun - Thurs: 7am - 9pm </span>
        <span> Fri & Sat: 7am - 10pm </span>
      </div>
      <div className="footerdiv">
        <span className="footer"> © PIE 'N BURGER 2020</span>
      </div>
    </StyledSmFooter>
  )
}

export default SmFooter

  const StyledSmFooter = styled.footer`
  background-color: white;
  padding-top: 20px;
  /* height: 150px; */
  color: #053A92;
  text-align: center;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .section {
    margin: 15px 0 0;
  }

  .links {
    margin-top: 5px;
  }

  .footerdiv {
    color: white;
    background-color: #053A92;
    margin-top: 20px;
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
      margin: auto;
    }
  }

  @media (min-width: 601px) {
    /* for displays smaller than 768px */
    display: none;
  }
`
