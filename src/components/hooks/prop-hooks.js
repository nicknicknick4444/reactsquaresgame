import React, {createContext, useState, useContext} from "react";

const PropContext = createContext();
export const useProps = () => useContext(PropContext);

export default function PropProvider({children}) {
    const [winsignal, setWinsignal] = useState(false);

    return <PropContext.Provider value={{winsignal, setWinsignal}}>
        {children}
    </PropContext.Provider>
};
