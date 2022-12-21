import React from 'react';
import styled from 'styled-components'


const BurgerMenu = (props) => {

    if (props.navOpen === true) {
      return (
        <Wrapper onClick={props.handleNav} aria-expanded="true" aria-controls="menuItems">
          <img src="closeIcon.png" alt="close nav menu icon" aria-label="close dropdown menu"/>
        </Wrapper>
      )
    }
    return (
      <Wrapper onClick={props.handleNav} aria-expanded="false" aria-controls="menuItems">
        <img src="openIcon.png" alt="open nav menu icon" aria-label="open dropdown menu"/>
      </Wrapper>
    )
}
export default BurgerMenu;

const Wrapper = styled.button`
  position: relative;
  cursor: pointer;
  display: block;
  width: 58px;
  margin: auto 35px;

  // new accessibility styles
  background: none;
  border: none;
  padding: 0;

  & img {
    width: 80%;
    margin: auto;
  }
`;
