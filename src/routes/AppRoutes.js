import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import {useCommon} from "../providers/CommonProvider";
import InputPage from "../pages/InputPage";

const AppRoutes = () => {
    console.error("AppRoutes")
    const common = useCommon();

    // 뒤로가기 이벤트 캐치
    useEffect(() => {
        window.addEventListener('popstate', common.util.locationBack);
        return () => {
            window.removeEventListener('popstate', common.util.locationBack);
        }
    },[]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/InputPage" element={<InputPage />} />
        </Routes>
    );
};

export default AppRoutes;