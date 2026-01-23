import React, {useEffect} from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import UseTest from "../pages/UseTest";
import {useCommon} from "../providers/CommonProvider";
import TextFieldSample from "../pages/inputs/TextFieldSample";
import AutocompleteSample from "../pages/inputs/AutocompleteSample";
import GridSample from "../pages/layout/GridSample";
import ContainerSample from "../pages/layout/ContainerSample";
import { AnimatePresence, motion } from "framer-motion";

const slideVariants = {
    initial : (dir) => ({ x: dir === "back" ? "-100%" : "100%", opacity:0}),
    animate: {x:0, opacity:1},
    exit: (dir) => ({x: dir === "back" ? "100%" : "-100%", opacity:0})
}

function SlideWrapper({ children }) {
    const dir = "forward";
    return (
        <motion.div
            custom={dir}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,          // 새 화면이 위로
            }}
        >
            {children}
        </motion.div>
    );
}


const AnimatedRoutes = () => {
    console.error("AnimatedRoutes")
    const location = useLocation();

    return (
        <AnimatePresence mode="sync">
            {/* ✅ location 주입 + key 부여 */}
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<SlideWrapper><Home /></SlideWrapper>} />
                <Route path="/About" element={<SlideWrapper><About /></SlideWrapper>} />
                <Route path="/UseTest" element={<SlideWrapper><UseTest /></SlideWrapper>} />
                <Route path="/Contact" element={<SlideWrapper><Contact /></SlideWrapper>} />
                <Route path="/inputs/TextFieldSample" element={<SlideWrapper><TextFieldSample /></SlideWrapper>} />
                <Route path="/inputs/AutocompleteSample" element={<SlideWrapper><AutocompleteSample /></SlideWrapper>} />
                <Route path="/layout/GridSample" element={<SlideWrapper><GridSample /></SlideWrapper>} />
                <Route path="/layout/ContainerSample" element={<SlideWrapper><ContainerSample /></SlideWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};
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

    return <AnimatedRoutes />;
};

export default AppRoutes;