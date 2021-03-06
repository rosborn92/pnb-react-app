import React from 'react'
import PageStyle from '../PageStyle.styles'
import Jumbotron from '../Jumbotron.styles'

const Pies = () => (
  <>
    <Jumbotron src="pies3.jpg" alt="Row of Plated Meringue Pies" />
    <PageStyle>
      <h2> FRESHLY BAKED PIES </h2>
      <div className="box">
      <div className="innerBox">
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
            <img src="coconutPie.jpg" alt="Whole Coconut Pie"/>
          </div>
          <div className="section">
            <img src="pies.jpg" alt="Pie case at PNB" />
          </div>
          <div className="section">
            <img src="pie.jpg" alt="Fresh Strawberry and Peach Pies"/>
          </div>
        </div>
        </div>
      </div>
    </PageStyle>
  </>
)

export default Pies
