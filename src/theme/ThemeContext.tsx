import { createContext } from "react";

export type Theme = {
    backgroundColor: string,
    textColor: string,
    gradient: Array<string>,
}

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

export const themes: Record<string, Theme> = {
    light: {
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
        // gradient: ['#3550DC', '#27E9F7'] // blue gradient
        gradient: ['#F5F7FA', '#B8C6DB'] // white gradient
    },
    dark: {
        backgroundColor: '#000000',
        textColor: '#FFFFFF',
        gradient: ['#12100E', '#2B4162']
    },
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: themes.light,
    toggleTheme: () => {},
});
