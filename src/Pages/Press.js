import React from 'react'
import PageStyle from '../PageStyle.styles'
import Jumbotron from '../Jumbotron.styles'

const Press = () => (
  <>
    <Jumbotron src="kitchen2.jpg" alt="View of PNB kitchen" />
    <PageStyle>
      <h2>PRESS</h2>
      <div className="info">
        <span>
          Thank you to all those who have contributed to the content below and the fans who appreciate our work.
        </span>
      </div>
      <div className="cardBox">
        <div className="videoCard">
          <iframe
            title="Campus Eats"
            src="https://www.youtube.com/embed/GgF0IuNtcWo">
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            title="Food Insider - The Best Burger in LA"
            src="https://www.youtube.com/embed/diJpBp6cCaU">
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            title="Worth It $5 Pie Vs. $250 Pie"
            src="https://www.youtube.com/embed/tqPub3p3k5E">
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            title="Keith Eats Every Pie"
            src="https://www.youtube.com/embed/fsNhU6H-16I">
          </iframe>
        </div>
      </div>
    </PageStyle>
  </>
)

export default Press
