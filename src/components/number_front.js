import React,{ memo } from "react";

const NumberGrid = ({name, itera, indic, is_clickable}) => {
    if (is_clickable === "Y") {
        return (
            <>
                <p className="hovery" style={{ width: "90px", float: "left", color: "#5D3FD3" }} onClick={() => indic(name, itera)}>
                    {name}
                </p>
            </>
        );
    } else if (name === "Blank") {
        return (
            <>
                <p style={{ width: "90px", fontSize: "25px", float: "left", color: "#ee0000" }}>
                    {name}
                </p>
            </>
        );
    } else {
        return (
            <>
                <p style={{ width: "90px", fontSize: "25px", float: "left" }}>
                    {name}
                </p>
            </>
        );
    }
};

const Numbers = memo(NumberGrid);

export default Numbers;
