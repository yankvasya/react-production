import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "../config/routerConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    Object.values(routerConfig).map(({path, element}) => (
                        <Route path={path} element={element} />
                    ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;