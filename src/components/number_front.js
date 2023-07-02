import React, { memo } from "react";

const NumberGrid = ({name, itera, indic, is_clickable}) => {
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
                <p className="the-blank">
                    {name}
                </p>
            </>
        );
    } else {
        return (
            <>
                <p className="ordinary">
                    {name}
                </p>
            </>
        );
    }
};

const Numbers = memo(NumberGrid);

export default Numbers;
