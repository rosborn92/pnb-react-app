import React from 'react'
import StyledPhotoBox from './PhotoBox.styles'

const PhotoBox = () => (
  <StyledPhotoBox>

    <div className="card" >
      <img src="burger.jpg" />
    </div>
    <div className="card" >
      <img src="cashregister.jpg" />
    </div>
    <div className="card" >
      <img src="kitchen2.jpg" />
    </div>
    <div className="card" >
      <img src="milkshake.jpg" />
    </div>
    <div className="card" >
      <img src="pie2.jpeg" />
    </div>
    <div className="card" >
      <img src="counter2.jpg" />
    </div>
  </StyledPhotoBox>
)

export default PhotoBox
