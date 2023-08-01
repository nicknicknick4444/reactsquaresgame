import React, { memo } from "react";
import {useProps} from "./hooks/prop-hooks.js";

function imagey(img) {
    switch (img) {
        case "1":
            img = <img style={{width: 90}} src="https://i.ibb.co/M96FmyF/img1.png" />;
            break;
        case "2":
            img = <img style={{width: 90}} src="https://i.ibb.co/ZxG10sk/img2.png" />;
            break;
        case "3":
            img = <img style={{width: 90}} src="https://i.ibb.co/D5rSN3K/img3.png" />;
            break;
        case "4":
            img = <img style={{width: 90}} src="https://i.ibb.co/8dMqyD1/img4.png" />;
            break;
        case "5":
            img = <img style={{width: 90}} src="https://i.ibb.co/dMXR5pg/img5.png" />;
            break;
        case "6":
            img = <img style={{width: 90}} src="https://i.ibb.co/XsTYm5J/img6.png" />;
            break;
        case "7":
            img = <img style={{width: 90}} src="https://i.ibb.co/XJhTN8H/img7.png" />;
            break;
        case "8":
            img = <img style={{width: 90}} src="https://i.ibb.co/nsDZmfh/img8.png" />;
            break;
        case "9":
            img = <img style={{width: 90}} src="https://i.ibb.co/TPPG03y/img9.png" />;
    };
    return img;
};

const NumberGrid = ({name, itera, indic, is_clickable}) => {
    const {win} = useProps();
    
    if (is_clickable === "Y") {
        return (
            <>
                <p key={name + "123"} className="clickable" onClick={() => indic(name, itera)}>
                        {imagey(name)}
                </p>
            </>
        );
    } else if (!win && name === "") {
        return (
            <>
                <p key={name + "123"} className="the-blank"></p>
            </>
        );
    } else if (win && name === "") {
        return (
            <>
                <p key={name + "123"} className="the-blank-winning"></p>
            </>
        );

    } else {
        return (
            <>
                <p key={name = "123"} className={win ? "winning" : "ordinary"}>
                    {imagey(name)}
                </p>
            </>
        );
    }
};

const Numbers = memo(NumberGrid);

export default Numbers;
