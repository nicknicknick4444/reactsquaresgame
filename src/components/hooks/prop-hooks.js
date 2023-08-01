import React, {createContext, useState, useContext} from "react";

const PropContext = createContext();
export const useProps = () => useContext(PropContext);

export default function PropProvider({children}) {
    const [win, setWin] = useState(false);

    return <PropContext.Provider value={{win, setWin}}>
        {children}
    </PropContext.Provider>
};
