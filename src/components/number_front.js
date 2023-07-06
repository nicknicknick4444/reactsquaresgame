import React, { memo } from "react";
import {useProps} from "./hooks/prop-hooks.js";

const NumberGrid = ({name, itera, indic, is_clickable}) => {
    const {win} = useProps();
    
    if (is_clickable === "Y") {
        return (
            <>
                <p className="clickable" onClick={() => indic(name, itera)}>
                    {name}
                </p>
            </>
        );
    } else if (name === "Blank") {
        return (
            <>
                <p className="the-blank"></p>
            </>
        );
    } else if (win && name === "") {
        return (
            <>
                <p className="the-blank-winning"></p>
            </>
        );

    } else {
        return (
            <>
                <p className={win ? "winning" : "ordinary"}>
                    {name}
                </p>
            </>
        );
    }
};

const Numbers = memo(NumberGrid);

export default Numbers;
