import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext(null);

function GlobalState({children}){

    const[theme,setTheme] = useState('light');

    const handleChangeThemeOnButtonClick = () => {
setTheme(theme ==='light' ? 'dark' : 'light');
    }

    return <GlobalContext.Provider value={{theme, handleChangeThemeOnButtonClick}}>{children}</GlobalContext.Provider>
}

export default GlobalState;