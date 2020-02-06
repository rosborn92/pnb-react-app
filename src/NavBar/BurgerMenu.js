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
  /* padding: 0; */
  cursor: pointer;
  display: block;
  width: 58px;
  margin: auto 35px;
  /* padding: 1px 1px 0; */

  & img {
    width: 80%;
    margin: auto;
  }
  /* & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 3.5rem;
    height: .4rem;
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
  }
  .open span:nth-child(2) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  } */
`;


//
//   <StyledMobileNav>
//     <button>
//       <img src="burgerIcon.png" alt="Burger Icon Dropdown Button" />
//     </button>
//     <div className="dropdown">
//       <Link to="/">HOME</Link>
//
//       <Link to="/About">ABOUT</Link>
//
//       <Link to="/Menu">MENU</Link>
//
//       <Link to="/Pies">PIES</Link>
//
//       <Link to="/Press">PRESS</Link>
//
//       <Link to="/Catering">CATERING</Link>
//
//       <Link to="/FoodTruck">FOOD TRUCK</Link>
//     </div>
//   </StyledMobileNav>
// )
//
// export default MobileNav
