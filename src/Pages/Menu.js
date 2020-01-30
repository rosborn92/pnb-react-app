import React from 'react'
import styled from 'styled-components'
import Jumbotron from '../Jumbotron.styles'

const Menu = () => (
  <>
    <Jumbotron src="backcounter.jpg" />
    <PageStyle>
      <img src="breakfastMenu.jpg" className="menus"/>
      <img src="lunchMenu.jpg" className="menus"/>
      <img src="kidsBreakfast.jpg" className="menus"/>
      <img src="kidsLunch.jpg" className="menus"/>
    </PageStyle>
  </>
)

export default Menu



const PageStyle = styled.div`
  padding: 30px 0;
  text-align: center;

  img {
    max-width: 600px;
    margin: 30px auto;
    width: 80%;
  }
`
