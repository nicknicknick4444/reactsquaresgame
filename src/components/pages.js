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
        {/* <Linx /> */}
        <div className="links-list">
            <h1>
                <a href="https://ecomfrontend-nick.vercel.app/" target="#">
                    Ecommerce Website
                </a>
            </h1>
            <h1>
                <a href="https://jade-kelpie-d2680a.netlify.app/numbers" target="#">
                    Numbers Game
                </a>
            </h1>
        </div>
        </>
    );
};
