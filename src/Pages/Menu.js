import React from 'react'
import PageStyle from '../PageStyle.styles'
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
