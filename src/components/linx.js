import React from "react";
import {Link, useLocation, Outlet} from "react-router-dom";
import "../index.css";
// import NumbersGame from "./number-functions.js";

export default function Linx() {
    return (
        <>
            <div>
                <Link to="/">Home  |  </Link>
                <Link to="../numbers">Numbers Game</Link>
            </div>
            <div className="pithy">GOOSE!</div>
        </>
    );
};
