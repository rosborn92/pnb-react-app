import React from 'react'
import SmPageStyle from '../SmPageStyle.styles'

const SmAbout = () => (
  <>
    <SmPageStyle>
      <h4 className="pgHeader"> HISTORY </h4>
      <div className="box" >
        <div className="section" >
          <br />
          <span>
            Pie 'n Burger opened in 1963 in its current location on California Blvd. Its formica counters and soda fountain preserve the essence of the traditional coffee shop.
          </span>
          <br />
          <span>
            Michael Osborn, the current owner, first ate at the restaurant as a 9-year old and began working there in 1972 while studying dentistry at USC.
          </span>
          <br />

          <span>
            Michael has preserved the recipes and attention to detail of the iconic pies and classic California cheeseburgers with the help of long-time employees whose tenures, like Michael's, extend decades.
          </span>
          <br />

          <span>
            Pie 'n Burger has recieved many accolades honoring its commitment to quality and tradition, a feat that continues to attract the next generation of food and Americana enthusiasts alike.
          </span>
          <br />
        </div>


          <div className="section" >
            <img src="kitchen.jpg" alt="PNB kitchen" />
          </div>
        </div>
      </SmPageStyle>
  </>
)

export default SmAbout

// <div className="imgSection" >
//   <img src="burger.jpg" alt="plated burger and fries" />
// </div>
//
// <div className="imgSection" >
//   <img src="csbw.jpg" alt="black and white snap of cash register" />
// </div>
//
// <div className="imgSection" >
//   <img src="clock.jpeg" alt="PNB neon clock" />
// </div>
