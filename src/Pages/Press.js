import React from 'react'
import PageStyle from '../PageStyle.styles'
import Jumbotron from '../Jumbotron.styles'

const Press = () => (
  <>
    <Jumbotron src="kitchen2.jpg" alt="View of PNB kitchen" />
    <PageStyle>
      <h1>PRESS</h1>
      <div className="info">
        <span>
          Thank you to all those who have contributed to the content below and the fans who appreciate our work.
        </span>
      </div>
      <div className="cardBox" >
        <div className="videoCard">
          <iframe
            title="Campus Eats"
            src="https://www.youtube.com/embed/GgF0IuNtcWo"
            alt="Youtube video by Campus Eats reviewing PNB experience"
          >
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            title="Food Insider - The Best Burger in LA"
            src="https://www.youtube.com/embed/diJpBp6cCaU"
            alt="Youtube video by Food Insider titled 'The Best Burger in LA'"
          >
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            title="Worth It $5 Pie Vs. $250 Pie"
            src="https://www.youtube.com/embed/tqPub3p3k5E"
            alt="Youtube video by Worth It comparing pies at different price points"
          >
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            title="Keith Eats Every Pie"
            src="https://www.youtube.com/embed/fsNhU6H-16I"
            alt="Youtube video by Youtube star Keith titled 'Keith Eats Every Pie'"
          >
          </iframe>
        </div>
      </div>
    </PageStyle>
  </>
)

export default Press
