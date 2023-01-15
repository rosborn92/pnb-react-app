import React from "react";
import PageStyle from "../PageStyle.styles";
import Jumbotron from "../Jumbotron.styles";

const Catering = () => (
    <main>
        <title>Catering Page</title>
        <Jumbotron src="burgerNfriesShort.jpg" alt="Plated Burger and Fries" />
        <PageStyle>
            <h1> CATERING </h1>
            <div className="info">
                <span>
                    Below are our standard and most popular menus for catered
                    events. Please conctact for other options or to inquire
                    about a catered event.
                </span>
                <br />
                <div className="phone">
                    <img
                        src="phoneIcon.png"
                        alt=""
                        style={{ marginRight: "10px" }}
                    />
                    <a href="tel:+16267951123" aria-label="phone number - click to call">(626)795-1123</a>
                </div>
                <br />
                <span>
                    Prices include paper goods, tax, and labor. Travel outside
                    the greater Pasadena area, certain venues, and a food truck
                    catered event may incur an additional fee.
                </span>
            </div>
            <h2> CATERED BURGER PARTY </h2>
            <div className="info2">
                <span>$37.00 / person</span>
                <span>50 person minimum</span>
            </div>
            <div className="box">
                <div className="innerBox">
                    <div className="wideColumn">
                        <h3 className="borderedFull" style={{ marginTop: "0" }}>
                            I. Cheeseburgers
                        </h3>
                        <ul>
                            <li>Vegetarian & Turkey available upon request</li>
                        </ul>
                        <h3 className="borderedFull">II. 3 Side Dishes:</h3>
                        <ul>
                            <li>French Fries</li>
                            <li>Potato Salad</li>
                            <li>Tossed Green Salad</li>
                            <li>Fresh Fruit Salad</li>
                            <li>Pasta Salad</li>
                            <li>Cole Slaw</li>
                            <li>Chili</li>
                        </ul>
                        <h3 className="borderedFull">III. Dessert</h3>
                        <ul>
                            <li>Assorted Pies & Vanilla Ice Cream</li>
                        </ul>
                        <strong className="borderedFull" style={{}}>
                            Also available for additional fee:
                        </strong>
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
                    <div
                        className="slimColumn"
                        style={{ justifyContent: "space-evenly" }}
                    >
                        <div>
                            <span>$37.00 / person **</span>
                            <span>50 person minimum</span>
                        </div>
                        <div className="section">
                            <img
                                src="catering.jpg"
                                alt="PNB catered event display"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgSection">
                <img src="catering.jpg" alt="PNB catered event display" />
            </div>
            <h2> CATERED BBQ PARTY </h2>
            <div className="info2">
                <span>$47.00 / person</span>
                <span>50 person minimum</span>
            </div>
            <div className="box">
                <div className="innerBox">
                    <div className="wideColumn">
                        <h3 className="borderedFull" style={{ marginTop: "0" }}>
                            I. Choice of 2 Meats:
                        </h3>
                        <ul>
                            <li>BBQ Chicken</li>
                            <li>Roast Tri Tip</li>
                            <li>Pulled Pork</li>
                        </ul>
                        <h3 className="borderedFull">II. 3 Side Dishes:</h3>
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
                        <h3 className="borderedFull">III. Rolls & Butter</h3>
                        <h3 className="borderedFull">IV. Dessert</h3>
                        <ul>
                            <li>Assorted Pies & Vanilla Ice Cream</li>
                        </ul>
                    </div>
                    <div
                        className="slimColumn"
                        style={{ justifyContent: "space-evenly" }}
                    >
                        <div>
                            <span>$47.00 / person **</span>
                            <span>50 person minimum</span>
                        </div>
                        <div className="section">
                            <img
                                src="cateringPies.jpg"
                                alt="PNB catered event dessert display"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgSection">
                <img
                    src="cateringPies.jpg"
                    alt="PNB catered event dessert display"
                />
            </div>
            <h2> APPETIZERS </h2>
            <span> prices vary </span>
            <div className="box">
                <div className="innerBox">
                    <div className="splitColumn">
                        <ul>
                            <li>Fresh Fruit</li>
                            <li>Fresh Vegetables & Dip</li>
                            <li>Spanokopita</li>
                            <li>Assorted Cheeses</li>
                            <li>
                                Filo Wrapped Stuffed Baked Brie with Crackers
                            </li>
                            <li>Spinach Dip in Bread Terrene</li>
                            <li>Flaky Mushroom Tartlets</li>
                            <li>Stuffed Cherry Tomatoes</li>
                            <li>Blue Cheese Biscuits</li>
                            <li>
                                Layered Mexican Bean Dip with Chips and Salsa
                                (Guacamole Optional)
                            </li>
                            <li>
                                Stuffed Mushroom Caps (Crab or Bacon & Cheese)
                            </li>
                            <li>Deviled Eggs</li>
                            <li>
                                Antipasto Platter (olives,peppers, cheese,
                                Italian meats)
                            </li>
                        </ul>
                    </div>
                    <div className="splitColumn">
                        <ul>
                            <li>Assorted Gourmet Quesadillas</li>
                            <li>Potstickers</li>
                            <li>Mini Tostadas</li>
                            <li>
                                Shredded Beef or Chicken Taquitos with Fresh
                                Salsa
                            </li>
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
                    <div className="longColumn">
                        <ul>
                            <li>Fresh Fruit</li>
                            <li>Fresh Vegetables & Dip</li>
                            <li>Spanokopita</li>
                            <li>Assorted Cheeses</li>
                            <li>
                                Filo Wrapped Stuffed Baked Brie with Crackers
                            </li>
                            <li>Spinach Dip in Bread Terrene</li>
                            <li>Flaky Mushroom Tartlets</li>
                            <li>Stuffed Cherry Tomatoes</li>
                            <li>Blue Cheese Biscuits</li>
                            <li>
                                Layered Mexican Bean Dip with Chips and Salsa
                                (Guacamole Optional)
                            </li>
                            <li>
                                Stuffed Mushroom Caps (Crab or Bacon & Cheese)
                            </li>
                            <li>Deviled Eggs</li>
                            <li>
                                Antipasto Platter (olives,peppers, cheese,
                                Italian meats)
                            </li>
                            <li>Assorted Gourmet Quesadillas</li>
                            <li>Potstickers</li>
                            <li>Mini Tostadas</li>
                            <li>
                                Shredded Beef or Chicken Taquitos with Fresh
                                Salsa
                            </li>
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
    </main>
);

export default Catering;
