import React, { useState, useEffect } from "react";
import Numbers from "./number_front.js";
import Linx from "./linx.js";

export default function NumbersGame() {
    const [nums, setNums] = useState(["1","2","Blank","4","5","3","7","8","9"]);
    const [permitty, setPermitty] = useState(["N", "N", "Y", "N", "Y", "N", "N", "N", "Y"]);
    const [clicked, setClicked] = useState([]);
    const [win, setWin] = useState(false);
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
            var win_seq = ["1","2","3","4","5","Blank ","7","8","9"];
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

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <Linx />
            <div className="all">
                <div className="main-square">
                    {
                    nums.map((name, i) => (
                        <Numbers name={name} key={i} itera={i} indic={indic} is_clickable={permitty[i]} />
                    ))
                    }
                </div>
                <div>
                    {win ? 
                        <div className="winner">WINNER! In {clicked.length === 1 ? 
                        "1 go!" : 
                        clicked.length + " goes!"}</div> : 
                        <div className="instructions">Rearrange the numbers</div>}
                </div>
                <div className="goes">
                    {clicked.join(", ")}
                </div>
            </div>
        </>
    );
};
