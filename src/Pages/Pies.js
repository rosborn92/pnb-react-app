import React from 'react'
import PageStyle from '../PageStyle.styles'
import Jumbotron from '../Jumbotron.styles'
import styled from 'styled-components'
import SmPageStyle from '../SmPageStyle.styles'

const Pies = () => (
  <>
    <Jumbotron src="pies3.jpg" alt="Row of Plated Meringue Pies" />
    <PageStyle>
      <h4 className="pgHeader"> FRESHLY BAKED PIES </h4>
      <div className="box">
        <div className="wideColumn">

          <h5 className="borderedFull"> CLASSICS </h5>
          <ul>
            <li>Apple</li>
            <li>Cherry</li>
            <li>Pecan</li>
            <li>Pumpkin</li>
            <li>Blueberry</li>
            <li>Rhubarb</li>
            <li>Custard</li>
            <li>Dutch Apple</li>
            <li>Boysenberry</li>
            <li>Baked Peach</li>
            <li>Mince (seasonal)</li>
          </ul>
          <h5 className="borderedFull"> MERINGUES </h5>
          <ul>
            <li>Banana</li>
            <li>Coconut</li>
            <li>Chocolate</li>
            <li>Lemon</li>
            <li>Peanut Butter</li>
            <li>Butterscotch</li>
          </ul>
          <h5 className="borderedFull">SEASONAL FRESH FRUITS</h5>
          <ul>
            <li>Strawberry</li>
            <li>Peach</li>
            <li>Blackberry</li>
          </ul>
          <h5 className="borderedFull">FRESH CAKES</h5>
          <ul>
            <li>Chocolate</li>
            <li>Carrot</li>
            <li>Coconut</li>
            <li>Strawberry</li>
            <li>Cheesecake</li>
          </ul>

        </div>
        <div className="slimColumn">
          <div className="section">
            <img src="coconutPie.jpg" />
          </div>
          <div className="section">
            <img src="pies.jpg" />
          </div>
          <div className="section">
            <img src="pie.jpg" />
          </div>
        </div>
      </div>
    </PageStyle>
    <SmPies />
  </>
)

export default Pies


const SmPies = () => (
  <>
    <SmPageStyle>
      <h4 className="pgHeader"> FRESHLY BAKED PIES </h4>
      <div className="box" >
        <div className="section" >
          <div className="fittedSection" >
            <h5 className="borderedFull"> CLASSICS </h5>
            <ul>
              <li>Apple</li>
              <li>Cherry</li>
              <li>Pecan</li>
              <li>Pumpkin</li>
              <li>Blueberry</li>
              <li>Rhubarb</li>
              <li>Custard</li>
              <li>Dutch Apple</li>
              <li>Boysenberry</li>
              <li>Baked Peach</li>
              <li>Mince (seasonal)</li>
            </ul>
            <h5 className="borderedFull"> MERINGUES </h5>
            <ul>
              <li>Banana</li>
              <li>Coconut</li>
              <li>Chocolate</li>
              <li>Lemon</li>
              <li>Peanut Butter</li>
              <li>Butterscotch</li>
            </ul>
            <h5 className="borderedFull">SEASONAL FRESH FRUITS</h5>
            <ul>
              <li>Strawberry</li>
              <li>Peach</li>
              <li>Blackberry</li>
            </ul>
            <h5 className="borderedFull">FRESH CAKES</h5>
            <ul>
              <li>Chocolate</li>
              <li>Carrot</li>
              <li>Coconut</li>
              <li>Strawberry</li>
              <li>Cheesecake</li>
            </ul>
          </div>
        </div>
      </div>
        <div className="imgSection">
          <img src="coconutPie.jpg" />
        </div>
        <div className="imgSection">
          <img src="pies.jpg" />
        </div>
        <div className="imgSection">
          <img src="pie.jpg" />
        </div>

      </SmPageStyle>
  </>
)
