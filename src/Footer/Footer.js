import React from 'react'
import StyledFooter from './Footer.styles'
import InstaLink from './InstaLink'
import TwitterLink from './TwitterLink'

const Footer = () => (
  <>
    <StyledFooter>
      <div className="row">
        <div className="column">
          <h4> LOCATION </h4>
          <span> 913 E. California Blvd. </span>
          <span> Pasadena, CA 91106 </span>
          <span> (626)795-1123 </span>
        </div>
        <div className="column2">
          <img src="logo.png" />
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
    </StyledFooter>
  </>
)

export default Footer
