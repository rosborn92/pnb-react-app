import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pnb from './Pnb';
import * as serviceWorker from './serviceWorker';

// if (process.env.NODE_ENV !== "production") {
//   const axe = require("@axe-core/react");
//   axe(React, ReactDOM, 1000);
// }


ReactDOM.render(<Pnb />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
