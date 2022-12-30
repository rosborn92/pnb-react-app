import React from 'react'
import PageStyle from '../PageStyle.styles'
import Jumbotron from '../Jumbotron.styles'

const Press = () => (
  <>
    <title>Press - some videos from fans</title>
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
            title="Campus Eats Reviews Pie N Burger"
            src="https://www.youtube.com/embed/GgF0IuNtcWo?cc_load_policy=1"
            alt="Youtube video by Campus Eats reviewing PNB experience"
            allowFullScreen
          >
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            title="Food Insider - The Best Burger in LA"
            src="https://www.youtube.com/embed/diJpBp6cCaU?cc_load_policy=1"
            alt="Youtube video by Food Insider titled 'The Best Burger in LA'"
            allowFullScreen
          >
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            title="Worth It $5 Pie Vs. $250 Pie"
            src="https://www.youtube.com/embed/tqPub3p3k5E?cc_load_policy=1"
            alt="Youtube video by Worth It comparing pies at different price points"
            allowFullScreen
          >
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            title="Keith Eats Every Pie"
            src="https://www.youtube.com/embed/fsNhU6H-16I?cc_load_policy=1"
            alt="Youtube video by Youtube star Keith titled 'Keith Eats Every Pie'"
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    </PageStyle>
  </>
)

export default Press
