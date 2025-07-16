import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Error404 from "./components/Error/Error404";
import AppLayout from "./AppLayout";

const HomePage = React.lazy(() => import("@app/pages/HomePage"));
const NotificationPage = React.lazy(() => import("@app/pages/NotificationPage"));

export default function AppRouting() {

    return(
        <Routes>
            <Route path="" element={<AppLayout />}>
                <Route path="home" element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <HomePage />
                    </Suspense>
                } />
            </Route>
            <Route path="notification" element={
                <Suspense fallback={<div>Loading...</div>}>
                    <NotificationPage />
                </Suspense>
            } />
            <Route path="*" element={<Error404 />} />
            <Route index element={<Navigate to="/home" replace />} />
        </Routes>
    )
}