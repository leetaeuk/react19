import * as React from 'react';
import {useSelector} from "react-redux";
import {ThemeProvider} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import {memo} from "react";

const Layout = memo(({ children }) => {
    console.error("Layout")
    const { theme } = useSelector((state) => state.theme);

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft:2,
                    paddingRight:2,
                }}
            >
                {/* Header */}
                <Header />

                {/* ✅ Content 영역 (슬라이드가 일어나는 곳) */}
                <Box
                    sx={{
                        flex: "1 1 auto",
                        position: "relative",   // ⭐ 핵심
                        overflow: "hidden",     // ⭐ 핵심
                    }}
                >
                    {children}
                </Box>

                {/* Footer */}
                <Footer />
            </Box>
        </ThemeProvider>
    );
});
export default Layout;