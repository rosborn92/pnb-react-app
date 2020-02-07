import React from 'react';
import styled from 'styled-components'


const BurgerMenu = (props) => {

    if (props.navOpen === true) {
      return (

        <Wrapper onClick={props.handleNav} >
          <div className={props.navOpen ? "open" : "" }>
            <img src="closeIcon.png" alt="close nav menu icon"/>
          </div>
        </Wrapper>

      )
    }
    return (
      <Wrapper onClick={props.handleNav} >
        <div className={props.navOpen ? "open" : "" }>
          <img src="openIcon.png" alt="open nav menu icon" />
        </div>
      </Wrapper>
    )
}
export default BurgerMenu;

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  width: 58px;
  margin: auto 35px;

  & img {
    width: 80%;
    margin: auto;
  }
`;
