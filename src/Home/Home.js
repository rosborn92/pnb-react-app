import React from 'react'
import StyledHome from './Home.styles'
import PhotoBox from '../PhotoBox/PhotoBox'

const Home = () => (
  <>
    <StyledHome>
      <img src="logo.png" alt="View of Restaurant Counter"/>
    </StyledHome>
    <PhotoBox />
  </>
)

export default Home
