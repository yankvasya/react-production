import {ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface IUseThemeResult {
    theme: ETheme,
    toggleTheme: () => void
}

export const useTheme = (): IUseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newValue = theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT
        setTheme(newValue)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newValue)
    }

    return {
        theme,
        toggleTheme
    }
}