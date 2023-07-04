import React from "react";
import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import {navigate, useRoutes} from "react-router-dom";
import './App.css';
import Home from "./components/pages.js";
import NumbersGame from "./components/number_functions.js";
// import {App as Appy} from "./other/src/App.js";

function App() {
  let element = useRoutes([
    {path: "/", element: <Home />},
    {path: "numbers", element: <NumbersGame />},
    // {path: "other", element: <Appy />}
  ]);
  return element;
}

export default App;
