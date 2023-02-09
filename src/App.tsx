import './global.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {AboutPageAsync} from "./pages/AboutPage/index.async";
import {MainPageAsync} from "./pages/MainPage/index.async";

export const App = () => {
    return (
        <div className="app">
            <div>
                <Link to={'/'} >Main page</Link>
                <Link to={'/about'}>About page</Link>
            </div>
           <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                   <Route path={'/'} element={<MainPageAsync/>} />
                   <Route path={'/about'} element={<AboutPageAsync/>}/>
               </Routes>
           </Suspense>
        </div>
    )
}
