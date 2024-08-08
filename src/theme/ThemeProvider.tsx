import React, { useState, ReactNode } from 'react'
import { ThemeContext, themes } from './ThemeContext'

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider