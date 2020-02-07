import React from 'react'
import {
  BrowserRouter as Router,
  Route
  } from 'react-router-dom'

import NavBar from './NavBar/NavBar'
import Catering from './Pages/Catering'
import Footer from './Footer'
import Menu from './Pages/Menu'
import Pies from './Pages/Pies'
import Press from './Pages/Press'
import Home from './Home/Home'
import FoodTruck from './Pages/FoodTruck'
import About from './Pages/About'
import GlobalStyle from './GlobalStyle'


class Pnb extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      navOpen: false
    }
  }

    handleNav = () => {
      this.setState({navOpen: !this.state.navOpen})
    }

  render () {

    return (
      <GlobalStyle>
        <Router>
          <NavBar
            navOpen={this.state.navOpen}
            handleNav={this.handleNav}
          />
          <Route
            exact path="/"
            render = {() => {
              return (
                <Home/>
              )
            }}
          />

          <Route
            exact path="/Menu"
            render = {() => {
              return (
                <Menu/>
              )
            }}
          />

          <Route
            exact path="/Pies"
            render = {() => {
              return (
                <Pies/>
              )
            }}
          />

          <Route
            exact path="/Press"
            render = {() => {
              return (
                <Press/>
              )
            }}
          />

          <Route
            exact path="/FoodTruck"
            render = {() => {
              return (
                <FoodTruck/>
              )
            }}
          />
          <Route
            exact path="/About"
            render = {() => {
              return (
                <About/>
              )
            }}
          />
          <Route
            exact path="/Catering"
            render = {() => {
              return (
                <Catering/>
              )
            }}
          />

        </Router>
        <Footer />
      </GlobalStyle>
    )
  }
}

export default Pnb
