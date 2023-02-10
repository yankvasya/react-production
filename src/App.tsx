import './styles/main.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {AboutPageAsync} from "./pages/AboutPage/index.async";
import {MainPageAsync} from "./pages/MainPage/index.async";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <div>
                <Link to={'/'} >Main page</Link>
                <Link to={'/about'}>About page</Link>
            </div>
            <button onClick={toggleTheme}>change theme</button>
            <br/>
           <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                   <Route path={'/'} element={<MainPageAsync/>} />
                   <Route path={'/about'} element={<AboutPageAsync/>}/>
               </Routes>
           </Suspense>
        </div>
    )
}
