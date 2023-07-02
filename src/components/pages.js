import React from "react";
import {Link, useLocation, Outlet} from "react-router-dom";
import Linx from "./linx.js";
// import NumbersGame from "./number-functions.js";

// export function Linx() {
//     return (
//         <>
//             <div><Link to="/">Home  |  </Link><Link to="../numbers">Numbers Game</Link></div>
//         </>
//     );
// };

export default function Home() {
    return (
        <>
        <Linx />
        <div>
            <h1>Hi!</h1>
        </div>
        </>
    );
};
