import {CountNum} from "./components/countNum";
import './global.scss'
import {Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";

export const App = () => {
    return (
        <div className="app">
            <div>
                <Link to={'/'} >Main page</Link>
                <Link to={'/about'}>About page</Link>
            </div>
            <Routes>
                <Route path={'/'} element={<MainPage/>} />
                <Route path={'/about'} element={<AboutPage/>}/>
            </Routes>
        </div>
    )
}
