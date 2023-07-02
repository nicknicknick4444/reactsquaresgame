import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import {BrowserRouter as Router, Link} from "react-router-dom";
import App from './App';
import Linx from "./components/pages.js";
import NumbersGame from "./components/number_functions.js";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <div><Link to="/">Home  |  </Link><Link to="../numbers">Numbers Game</Link></div> */}
      <App />
      {/* <NumbersGame /> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
