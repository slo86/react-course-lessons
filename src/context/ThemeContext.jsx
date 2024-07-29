import {createContext, useCallback, useContext, useState} from "react";

const ThemeContext = createContext({theme: "light"});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => {
            return prevTheme === 'light' ? 'dark' : 'light'
        });
    }, [])

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}
