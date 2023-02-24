import './styles/main.scss'
import {Link} from "react-router-dom";
import {useTheme} from './providers/ThemeProvider'
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "./providers/router";
import {routerConfig} from "./providers/router/config/routerConfig";
import React from "react";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>
                {
                    Object.values(routerConfig).map(({path}) => (
                        <Link to={path} >Main page</Link>
                    ))
                }
            </div>
            <button onClick={toggleTheme}>change theme</button>
            <br/>
            <AppRouter />
        </div>
    )
}
