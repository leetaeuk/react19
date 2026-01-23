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
import {useSelector} from "react-redux";

const slideVariants = {
    initial : (dir) => ({ x: dir === "back" ? "-100%" : "100%", opacity:0}),
    animate: {x:0, opacity:1},
    exit: (dir) => ({x: dir === "back" ? "100%" : "-100%", opacity:0})
}

function SlideWrapper({ children, dir }) {
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
    const location = useLocation();
    const common = useCommon();
    const dir = common.util.getNavigationDirection?.() || "forward";
    console.error("AnimatedRoutes " + dir)

    return (
        <AnimatePresence mode="sync">
            {/* ✅ location 주입 + key 부여 */}
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<SlideWrapper dir={dir}><Home /></SlideWrapper>} />
                <Route path="/About" element={<SlideWrapper dir={dir}><About /></SlideWrapper>} />
                <Route path="/UseTest" element={<SlideWrapper dir={dir}><UseTest /></SlideWrapper>} />
                <Route path="/Contact" element={<SlideWrapper dir={dir}><Contact /></SlideWrapper>} />
                <Route path="/inputs/TextFieldSample" element={<SlideWrapper dir={dir}><TextFieldSample /></SlideWrapper>} />
                <Route path="/inputs/AutocompleteSample" element={<SlideWrapper dir={dir}><AutocompleteSample /></SlideWrapper>} />
                <Route path="/layout/GridSample" element={<SlideWrapper dir={dir}><GridSample /></SlideWrapper>} />
                <Route path="/layout/ContainerSample" element={<SlideWrapper dir={dir}><ContainerSample /></SlideWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};
const AppRoutes = () => {
    console.error("AppRoutes")

    const common = useCommon();

    // 뒤로가기 이벤트 캐치
    useEffect(() => {
        const handlePopState = () => {
            common.util.locationBack(null, null, null, { skipNavigate: true });
        };

        //window.addEventListener('popstate', common.util.locationBack);
        window.removeEventListener('popstate', handlePopState);
        return () => {
            //window.removeEventListener('popstate', common.util.locationBack);
            window.removeEventListener('popstate', handlePopState);
        }
    },[common.util]);

    return <AnimatedRoutes />;
};

export default AppRoutes;