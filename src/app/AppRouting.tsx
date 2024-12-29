import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Error404 from "./components/Error/Error404";

const HomePage = React.lazy(() => import('@app/pages/HomePage'));

export default function AppRouting() {

    return(
        <Routes>
            <Route path='' element={
                <Suspense>
                    <HomePage />
                </Suspense>
            }/>
            <Route path='*' element={<Error404 />} />
        </Routes>
    )
}