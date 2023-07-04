import React, { useState, useEffect } from "react";
import {Helmet, HelmetProvider, HelmetData} from "react-helmet-async";
import {useProps} from "./hooks/prop-hooks.js";
import Numbers from "./number_front.js";
import Linx from "./linx.js";

export default function NumbersGame() {
    const [nums, setNums] = useState(["1","2","Blank","4","5","3","7","8","9"]);
    const [permitty, setPermitty] = useState(["N", "N", "Y", "N", "Y", "N", "N", "N", "Y"]);
    const [clicked, setClicked] = useState([]);
    const {win, setWin} = useProps();
    const indic = (name, itera) => changer(name, itera);

    function changer(na, bo) {
        var beat = nums.toString().split(",");
        for (const [index, item] of beat.entries()) {
            if (item === "Blank") {
                beat[index] = na;
                beat[bo] = "Blank";
                setNums([...beat]);
                setClicked([...clicked, na]);
            }
        }
    };

    function decide_permitty(bo) {
        var new_permitty = [];
        switch (bo) {
            case 0:
                new_permitty = ["N", "Y", "N", "Y", "N", "N", "N", "N", "N"];
                break;
            case 1:
                new_permitty = ["Y", "N", "Y", "N", "Y", "N", "N", "N", "N"];
                break;
            case 2:
                new_permitty = ["N", "Y", "N", "N", "N", "Y", "N", "N", "N"];
                break;
            case 3:
                new_permitty = ["Y", "N", "N", "N", "Y", "N", "Y", "N", "N"];
                break;
            case 4:
                new_permitty = ["N", "Y", "N", "Y", "N", "Y", "N", "Y", "N"];
                break;
            case 5:
                new_permitty = ["N", "N", "Y", "N", "Y", "N", "N", "N", "Y"];
                break;
            case 6:
                new_permitty = ["N", "N", "N", "Y", "N", "N", "N", "Y", "N"];
                break;
            case 7:
                new_permitty = ["N", "N", "N", "N", "Y", "N", "Y", "N", "Y"];
                break;
            case 8:
                new_permitty = ["N", "N", "N", "N", "N", "Y", "N", "Y", "N"];
                break;
            default:
                new_permitty = ["YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES", "YES"];
        }
        setPermitty([...new_permitty]);
    };

    useEffect(() => {        
        function winner() {
            var beat2 = nums.toString();
            var win_seq = ["1","2","3","4","5","","7","8","9"];
            var win_permitty = ["N", "N", "N", "N", "N", "N", "N", "N", "N"];
            if (beat2 === "1,2,3,4,5,Blank,7,8,9") {
                setNums([...win_seq]);
                setPermitty([...win_permitty]);
                setWin(true);
            }
        };

        for (const [index, item] of nums.entries()) {
            if (item === "Blank" && win === false) {
                decide_permitty(index);
            }
        }
        winner();
    }, [nums]);

    const helmetData = new HelmetData({});

    return (
        
        <>
        <div className="outer-container">
                <Linx />
                
                <div className="all">
                <Helmet helmetData={helmetData}>
                    <meta name="viewport" content="width=device-width, initial-scale=0.9" />
                </Helmet>
                    <div className={win ? "main-square-winning" : "main-square"}>
                        {
                        nums.map((name, i) => (
                            <Numbers name={name} key={i} itera={i} indic={indic} is_clickable={permitty[i]} />
                        ))
                        }
                    </div>
                    <div className={win ? "main-square-winning2" : "main-square2"}>
                    </div>

                    <div className="other-items">
                        <div>
                            {win ? 
                                <div className="winner">WINNER! In </div> : 
                                <div className="instructions">Numerical order challenge</div>}
                        </div>
                        <div className={win ? "goes-win" : "goes"} id="goes-number">
                            {clicked.length === 1 ? clicked.length + " go" : clicked.length + " goes"}
                        </div>
                        {win ? 
                            <a href="/numbers">
                                <div className="reset">Play Again?</div>
                            </a>
                        : null}
                </div>
                </div>
            </div>
        </>
    );
};
