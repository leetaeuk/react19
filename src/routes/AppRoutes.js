import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import {useCommon} from "../providers/CommonProvider";
import TextFieldSample from "../pages/inputs/TextFieldSample";
import AutocompleteSample from "../pages/inputs/AutocompleteSample";
import GridSample from "../pages/layout/GridSample";
import ContainerSample from "../pages/layout/ContainerSample";

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
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/inputs/TextFieldSample" element={<TextFieldSample />} />
            <Route path="/inputs/AutocompleteSample" element={<AutocompleteSample />} />
            <Route path="/layout/GridSample" element={<GridSample />} />
            <Route path="/layout/ContainerSample" element={<ContainerSample />} />
        </Routes>
    );
};

export default AppRoutes;