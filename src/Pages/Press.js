import React from 'react'
import PageStyle from '../PageStyle.styles'
import Jumbotron from '../Jumbotron.styles'
import SmPageStyle from '../SmPageStyle.styles'

const Press = () => (
  <>
    <Jumbotron src="kitchen2.jpg" alt="View of PNB kitchen" />
    <PageStyle>
      <div className="info">
        <span>
          Thank you to all those who have contributed to the content below and the fans who appreciate our work.
        </span>
      </div>
      <div className="cardBox">
        <div className="videoCard">
          <iframe
            src="https://www.youtube.com/embed/GgF0IuNtcWo">
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            src="https://www.youtube.com/embed/diJpBp6cCaU">
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            src="https://www.youtube.com/embed/tqPub3p3k5E">
          </iframe>
        </div>
        <div className="videoCard">
          <iframe
            src="https://www.youtube.com/embed/fsNhU6H-16I">
          </iframe>
        </div>
      </div>
    </PageStyle>
    <SmPress />
  </>
)

export default Press


const SmPress = () => (
  <>
    <SmPageStyle>
    <div className="info">
      <span>
        Thank you to all those who have contributed to the content below and the fans who appreciate our and their work.
      </span>
    </div>
    <div className="cardBox">
      <div className="videoCard">
        <iframe
          src="https://www.youtube.com/embed/GgF0IuNtcWo">
        </iframe>
      </div>
      <div className="videoCard">
        <iframe
          src="https://www.youtube.com/embed/diJpBp6cCaU">
        </iframe>
      </div>
      <div className="videoCard">
        <iframe
          src="https://www.youtube.com/embed/tqPub3p3k5E">
        </iframe>
      </div>
      <div className="videoCard">
        <iframe
          src="https://www.youtube.com/embed/fsNhU6H-16I">
        </iframe>
      </div>
    </div>
      </SmPageStyle>
  </>
)
