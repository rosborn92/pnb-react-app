import React from "react";
import styled from "styled-components";
// import InstaLink from './InstaLink'
// import TwitterLink from './TwitterLink'

const Footer = () => {
    return (
        <StyledFooter>
            <div className="section">
                <div className="column2">
                    <img className="logo" src="logo.png" alt="" />
                    <div className="links">
                        <InstaLink />
                        <TwitterLink />
                    </div>
                </div>

                <div className="column1">
                    <h4> LOCATION </h4>
                    <span> 913 E. California Blvd. </span>
                    <span> Pasadena, CA 91106 </span>
                    <br />
                    <div className="phone">
                        <img
                            src="phoneIcon.png"
                            alt=""
                            style={{ marginRight: "10px" }}
                        />
                        <a href="tel:+16267951123">(626)795-1123</a>
                    </div>
                </div>

                <div className="column3">
                    <h4> HOURS </h4>
                    <br></br>
                    {/* <span>Sun - Sat 8am - 9pm</span> */}
                    <span>MON - FRI 8am - 9pm</span>
                    <span>SAT & SUN 8am - 9pm</span>
                </div>
            </div>
            <div className="footerdiv">
                <span className="footer"> © PIE 'N BURGER 2020</span>
            </div>
        </StyledFooter>
    );
};

export default Footer;

const StyledFooter = styled.footer`
    background-color: white;
    color: #053a92;
    text-align: center;
    padding: 20px 0 0;
    margin-bottom: 10px;
    justify-content: center;

    .section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .column1 {
        width: auto;
        order: 2;
    }
    .column3 {
        width: auto;
        order: 3;
    }
    .column2 {
        width: auto;
        order: 1;
    }

    .links {
        margin-top: 5px;
    }

    .footerdiv {
        margin-top: 20px;
        padding: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
    }

    .phone {
        display: flex;
        align-items: center;
        margin: 0;
        justify-content: center;
        img {
            width: 30px;
        }
        a {
            text-decoration: none;
        }
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
        /* for displays larger than 768px */
        .section {
            flex-direction: row;
        }
        .column2 {
            order: 2;
            width: 24%;
        }
        .column1 {
            width: 38%;
            order: 1;
        }
        .column3 {
            order: 3;
            width: 38%;
        }
    }
`;
const StyledLogoLink = styled.a`
    width: 25px;
    margin: 5px;
    img {
        width: 40px;
    }
`;
const InstaLink = () => (
    <StyledLogoLink href="https://www.instagram.com/thepienburger/?hl=en">
        <img
            src="igLogo.png"
            alt="instagram logo, Link to PNB Instagram page"
        />
    </StyledLogoLink>
);

const TwitterLink = () => (
    <StyledLogoLink href="https://twitter.com/pienburger?lang=en">
        <img
            src="twitterLogo.png"
            alt="twitter logo, link to PNB twitter page"
        />
    </StyledLogoLink>
);
