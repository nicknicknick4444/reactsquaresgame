import React, { useState, useEffect } from "react";
import {Helmet, HelmetProvider, HelmetData} from "react-helmet-async";
import {randomise} from "./hooks/hooks.js";
import {useProps} from "./hooks/prop-hooks.js";
import Numbers from "./number_front.js";
import Linx from "./linx.js";

export default function NumbersGame() {
    const [game, setGame] = useState(randomise);
    // const [nums, setNums] = useState(["1","2","Blank","4","5","3","7","8","9"]);
    // const [permitty, setPermitty] = useState(["N", "N", "Y", "N", "Y", "N", "N", "N", "Y"]);
    const [nums, setNums] = useState(game[0]);
    const [permitty, setPermitty] = useState(game[1]);
    // const [clicked, setClicked] = useState([]);
    const [moves, setMoves] = useState(0);
    const [the_severity, setThe_severity] = useState("severe1");
    const {win, setWin} = useProps();
    const indic = (name, itera) => changer(name, itera);

    function changer(na, bo) {
        var beat = nums.toString().split(",");
        for (const [index, item] of beat.entries()) {
            if (item === "") {
                var new_moves = moves;
                new_moves += 1;
                beat[index] = na;
                beat[bo] = "";
                setNums([...beat]);
                // setClicked([...clicked, na]);
                setMoves(new_moves);
                severity(moves);
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

    function severity(moves) {
        var selector = moves + 1;
        if (moves < 132) {
            setThe_severity("severe" + selector);
        } else {
            setThe_severity("severe132")
        }
        console.log("severe" + selector);
        // return severe;
    };

    useEffect(() => {        
        function winner() {
            var game_as_string = nums.toString();
            // var win_seq = ["1", "2", "3", "4", "5", "Blank", "7", "8", "9"];
            var win_seq = game[2];
            var win_permitty = ["N", "N", "N", "N", "N", "N", "N", "N", "N"];
            // if (beat2 === "1,2,3,4,5,Blank,7,8,9") {
            if (game_as_string === game[3]) {
                setNums([...win_seq]);
                setPermitty([...win_permitty]);
                setWin(true);
            }
        };

        for (const [index, item] of nums.entries()) {
            if (item === "" && win === false) {
                decide_permitty(index);
            }
        }
        winner();
    }, [nums]);

    const helmetData = new HelmetData({});
    const leave_line = [2,5,8];

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
                            leave_line.indexOf(i) === -1 ? 
                            <><Numbers name={name} key={i + "z"} itera={i} indic={indic} is_clickable={permitty[i]} /></>
                            :
                            <><Numbers name={name} key={i + "z"} itera={i} indic={indic} is_clickable={permitty[i]} /><br /></>
                        ))
                        }
                        
                    </div>
                    <div className="other-items">
                        <div>
                            {win ? 
                                <div className="winner">WINNER! In </div> : 
                                <div className="instructions">Numerical order challenge</div>}
                        </div>
                        <div className={win ? "goes-win" : "goes"} id="goes-number">
                            {/* {clicked.length === 1 ? clicked.length + " move" : clicked.length + " moves"}<br /> */}
                            <span id={the_severity}>{moves === 1 ? moves + " move" : moves + " moves"}</span>
                        </div>
                        {win ? 
                            <a href="/numbers">
                                <div className="reset"><span id="reset-words">Play Again?</span></div>
                            </a>
                        : null}
                        {!win && moves >= 100 ? 
                        <div className="demoralise">
                            <p id="demoralise">You are doing TERRIBLY. You <i>could</i> give up.</p>
                            <a href="/numbers">
                                <div className="reset"><span id="reset-words">New Game?</span></div>
                            </a>
                        </div> : null}
                </div>
                </div>
            </div>
        </>
    );
};
