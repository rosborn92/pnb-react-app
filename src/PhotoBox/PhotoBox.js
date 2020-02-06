import React from 'react'
import StyledPhotoBox from './PhotoBox.styles'

const PhotoBox = () => (
  <StyledPhotoBox>

    <div className="card" >
      <img src="burger.jpg" alt="Plated burger and fries"/>
    </div>
    <div className="card" >
      <img src="cashregister.jpg" alt="PNB Cash Register"/>
    </div>
    <div className="card" >
      <img src="kitchen2.jpg" alt="PNB kitchen"/>
    </div>
    <div className="card" >
      <img src="milkshake.jpg" alt="Chocolate Milkshake"/>
    </div>
    <div className="card" >
      <img src="pie2.jpeg" alt="Strawberry and Peach Pie"/>
    </div>
    <div className="card" >
      <img src="counter2.jpg" alt="snapshot of the counter at PNB"/>
    </div>
  </StyledPhotoBox>
)

export default PhotoBox
