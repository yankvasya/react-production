import './styles/main.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {useTheme} from 'app/providers/ThemeProvider'
import {classNames} from "shared/lib/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <div>
                <Link to={'/'} >Main page</Link>
                <Link to={'/about'}>About page</Link>
            </div>
            <button onClick={toggleTheme}>change theme</button>
            <br/>
           <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                   <Route path={'/'} element={<MainPage/>} />
                   <Route path={'/about'} element={<AboutPage/>}/>
               </Routes>
           </Suspense>
        </div>
    )
}
