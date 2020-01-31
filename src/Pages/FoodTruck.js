import React from 'react'
import PageStyle from '../PageStyle.styles'
import Jumbotron from '../Jumbotron.styles'

const FoodTruck = () => (
  <>
    <Jumbotron src="ftBanner.jpg" alt="food truck" />
    <PageStyle>
      <h4 className="pgHeader">FOOD TRUCK</h4>
      <div className="info">
        <span>
          You can find the PNB food truck at local events, private and public.
        </span>
        <span>
          For information regarding catered events with the food truck, look to our catering page.
        </span>
        <span>
          For information about bringing the food truck to your event, please call the restaurant (626)795-1123.
        </span>
      </div>
      <div className="box" >
        <div className="slimColumn" >
          <div className="section" >
            <img src="ftCityHall.jpeg" alt="PNB food truck in front of Pasadena City Hall" />
          </div>
          <div className="section" >
            <img src="ftciclavia.jpg" />
            <div className="copyright">
              <span>© Carol Lightwood, </span>
              <a href="https://lacitypix.wordpress.com/2015/06/01/see-40000-bicylists-at-ciclavia-in-pasadena-wow-was-it-ever-crowded/">LA City Pix</a>
            </div>
          </div>
          <div className="section" >
            <img src="pnbtruck.jpg" alt="food truck at Rose Parade" />
            <div className="copyright">
              <span>© Josh McNair, </span>
              <a href="https://californiathroughmylens.com/rose-parade-floats">CaliforniaThroughMyLens.com</a>
            </div>
          </div>
        </div>
        <div className="wideColumnRt" >
        <div className="section" >
          <h5 className="borderedFull" style={{ marginTop: '15px' }}>
            Burgers & Hot Dogs
          </h5>
          <div className="text" >
            <span>
              1. Burger (beef or vegetarian)
            </span>
            <span className="menuItem">
              ....... $10.00
            </span>
          </div>
          <div className="text" >
          <span>
            2. Burger Combo w/Side & Drink
          </span>
          <span className="menuItem">
            ....... $16.00
          </span>
          </div>
          <div className="text" >
          <span>
            3. Dodger Dog
          </span>
          <span className="menuItem">
            ........................ $10.00
          </span>
          </div>
          <div className="text" >
          <span>
            4. Dodger Dog Combo w/Side & Drink
          </span>
          <span className="menuItem">
            ... $15.00
          </span>
          </div>
          <h5 className="borderedFull">
            Sandwiches
          </h5>
          <div className="text" >
          <span>
            1. Patty Melt
          </span>
          <span className="menuItem">
            ........................ $10.00
          </span>
          </div>
          <div className="text" >
          <span>
            2. Patty Melt Combo
          </span>
          <span className="menuItem">
            .................. $16.00
          </span>
          </div>
          <div className="text" >
          <span>
            3. Grilled Cheese
          </span>
          <span className="menuItem">
            ..................... $7.00
          </span>
          </div>
          <div className="text" >
          <span>
            4. Grilled Cheese Combo
          </span>
          <span className="menuItem">
            .............. $14.00
          </span>
          </div>
          <h5 className="borderedFull">
            Sides
          </h5>
          <div className="text" >
          <span>
            1. French Fries
          </span>
          <span className="menuItem">
            ....................... $5.00
          </span>
          </div>
          <div className="text" >
          <span>
            2. Potato Salad
          </span>
          <span className="menuItem">
            ....................... $5.00
          </span>
          </div>
          <h5 className="borderedFull">
            Drinks & Desserts
          </h5>
          <div className="text" >
            <span>
              1. Drinks
            </span>
            <span className="menuItem">
              ............................. $3.00
            </span>
          </div>
          <div className="text" >
            <span>
              2. Assorted Pies
            </span>
            <span className="menuItem">
              ...................... $4.00
            </span>
          </div>
          <br />
        </div>
        </div>
      </div>

    </PageStyle>
  </>
)

export default FoodTruck
