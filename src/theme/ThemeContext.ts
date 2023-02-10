import {createContext} from "react";

export enum ETheme {
    DARK = 'dark',
    LIGHT = ''
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface IThemeContext {
    theme?: ETheme,
    setTheme?: (theme: ETheme) => void,
}

export const ThemeContext = createContext<IThemeContext>({})