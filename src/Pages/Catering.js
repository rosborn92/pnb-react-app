import React from 'react'
import PageStyle from '../PageStyle.styles'
import Jumbotron from '../Jumbotron.styles'

const Catering = () => (
  <>
    <Jumbotron src="burgerNfriesShort.jpg" alt="Plated Burger and Fries" />
    <PageStyle>
      <h2> CATERING </h2>
      <div className="info">
        <span>
        Below are our standard and most popular menus for catered events.
        Please conctact for other options or to inquire about a catered event.
        </span>
        <span style={{marginTop:"10px"}}>
        (626)795-1123
        </span>
        <div className="lineBreak" />
        <span>
          Prices include paper goods, tax, and labor. Travel outside the greater Pasadena area, certain venues, and a food truck catered event may incur an additional fee.
        </span>
      </div>
      <h3> CATERED BURGER PARTY </h3>
      <div className="info2">
        <span>
          $32.00 / person
        </span>
        <span>
          50 person minimum
        </span>
      </div>
      <div className="box">
        <div className="wideColumn">
          <div className="fittedSection">

          <h5 className="borderedHeader">
            I. Cheeseburgers
          </h5>
          <ul>
            <li>Vegetarian & Turkey available upon request</li>
          </ul>
          <h5 className="borderedFull">
            II. 3 Side Dishes:
          </h5>
          <ul>
            <li>French Fries</li>
            <li>Potato Salad</li>
            <li>Tossed Green Salad</li>
            <li>Fresh Fruit Salad</li>
            <li>Pasta Salad</li>
            <li>Cole Slaw</li>
            <li>Chili</li>
          </ul>
          <h5 className="borderedFull">
            III. Dessert
          </h5>
          <ul>
            <li>Assorted Pies & Vanilla Ice Cream</li>
          </ul>
          <h5 className="borderedFull">
            Also available for additional fee:
          </h5>
          <ul>
            <li>Onion Rings</li>
            <li>Extra Side Dishes</li>
            <li>Dodger Dogs</li>
            <li>Milkshakes</li>
            <li>Sundae Bar</li>
            <li>Sodas</li>
            <li>Coffee</li>
          </ul>
        </div>
        </div>
        <div className="slimCateringColumn">
          <div>
            <span>
            $32.00 / person **
            </span>
            <span>
            50 person minimum
            </span>
          </div>
          <div className="section">
            <img src="catering.jpg" alt="PNB catered event display"/>
          </div>
        </div>
      </div>
      <div className="imgSection">
        <img src="catering.jpg" alt="PNB catered event display"/>
      </div>
      <h3> CATERED BBQ PARTY </h3>
      <div className="info2">
        <span>
          $42.00 / person
        </span>
        <span>
          50 person minimum
        </span>
      </div>
      <div className="box">
        <div className="wideColumn">
        <div className="fittedSection">
          <h5 className="borderedHeader">
              I. Choice of 2 Meats:
          </h5>
          <ul>
            <li>BBQ Chicken</li>
            <li>Roast Tri Tip</li>
            <li>Pulled Pork</li>
          </ul>
          <h5 className="borderedFull">
              II. 3 Side Dishes:
          </h5>
          <ul>
            <li>Blended Rice Pilaf</li>
            <li>Fruited Champagne Rice</li>
            <li>Traditional White Rice</li>
            <li>Baked Potatoes</li>
            <li>Twice-Baked & Stuffed Potatoes</li>
            <li>Garlic Mashed Potatoes</li>
            <li>French Fries</li>
            <li>Potato Salad</li>
            <li>Baked Beans</li>
            <li>Corn on the Cob</li>
            <li>Tossed Green Salad</li>
            <li>Fresh Fruit Salad</li>
            <li>Pasta Salad</li>
            <li>Cole Slaw</li>
            <li>Grilled Fresh Vegetables</li>
          </ul>
          <h5 className="borderedFull">
              III. Rolls & Butter
          </h5>
          <h5 className="borderedFull">
              IV. Dessert
          </h5>
          <ul>
            <li>Assorted Pies & Vanilla Ice Cream</li>
          </ul>
        </div>
        </div>
        <div className="slimCateringColumn" >
          <div>
            <span>
            $42.00 / person **
            </span>
            <span>
            50 person minimum
            </span>
          </div>
          <div className="section">
            <img src="cateringPies.jpg" alt="PNB catered event dessert display" />
          </div>
        </div>
      </div>
      <div className="imgSection">
        <img src="cateringPies.jpg" alt="PNB catered event dessert display" />
      </div>
      <h3> APPETIZERS </h3>
      <span> prices vary </span>
      <div className="box">
        <div className="splitColumn">
          <div className="fittedSection">
            <ul>
              <li>Fresh Fruit</li>
              <li>Fresh Vegetables & Dip</li>
              <li>Spanokopita</li>
              <li>Assorted Cheeses</li>
              <li>Filo Wrapped Stuffed Baked Brie with Crackers</li>
              <li>Spinach Dip in Bread Terrene</li>
              <li>Flaky Mushroom Tartlets</li>
              <li>Stuffed Cherry Tomatoes</li>
              <li>Blue Cheese Biscuits</li>
              <li>Layered Mexican Bean Dip with Chips and Salsa (Guacamole Optional)</li>
              <li>Stuffed Mushroom Caps (Crab or Bacon & Cheese)</li>
              <li>Deviled Eggs</li>
              <li>Antipasto Platter (olives,peppers, cheese, Italian meats)</li>
            </ul>
          </div>
        </div>
        <div className="splitColumn">
          <div className="fittedSection">
            <ul>
              <li>Assorted Gourmet Quesadillas</li>
              <li>Potstickers</li>
              <li>Mini Tostadas</li>
              <li>Shredded Beef or Chicken Taquitos with Fresh Salsa</li>
              <li>Fresh Asparagus Wrapped with Proscuitto</li>
              <li>Poached Salmon</li>
              <li>Mashed Potato Bar</li>
              <li>Skewered Meats with Dipping Sauces</li>
              <li>Chicken Wings & Drummettes (Spicy or BBQ)</li>
              <li>Meatballs (Swedish, BBQ, or Oriental)</li>
              <li>Pinwheel Sandwiches</li>
              <li>Jr. Cheeseburgers (Sliders)</li>
              <li>Small Deli Sandwiches on Rolls</li>
            </ul>
          </div>
        </div>
        <div className="longColumn">
          <div className="fittedSection">
            <ul>
              <li>Fresh Fruit</li>
              <li>Fresh Vegetables & Dip</li>
              <li>Spanokopita</li>
              <li>Assorted Cheeses</li>
              <li>Filo Wrapped Stuffed Baked Brie with Crackers</li>
              <li>Spinach Dip in Bread Terrene</li>
              <li>Flaky Mushroom Tartlets</li>
              <li>Stuffed Cherry Tomatoes</li>
              <li>Blue Cheese Biscuits</li>
              <li>Layered Mexican Bean Dip with Chips and Salsa (Guacamole Optional)</li>
              <li>Stuffed Mushroom Caps (Crab or Bacon & Cheese)</li>
              <li>Deviled Eggs</li>
              <li>Antipasto Platter (olives,peppers, cheese, Italian meats)</li>
              <li>Assorted Gourmet Quesadillas</li>
              <li>Potstickers</li>
              <li>Mini Tostadas</li>
              <li>Shredded Beef or Chicken Taquitos with Fresh Salsa</li>
              <li>Fresh Asparagus Wrapped with Proscuitto</li>
              <li>Poached Salmon</li>
              <li>Mashed Potato Bar</li>
              <li>Skewered Meats with Dipping Sauces</li>
              <li>Chicken Wings & Drummettes (Spicy or BBQ)</li>
              <li>Meatballs (Swedish, BBQ, or Oriental)</li>
              <li>Pinwheel Sandwiches</li>
              <li>Jr. Cheeseburgers (Sliders)</li>
              <li>Small Deli Sandwiches on Rolls</li>
            </ul>
          </div>
        </div>
      </div>

    </PageStyle>
  </>
)

export default Catering
