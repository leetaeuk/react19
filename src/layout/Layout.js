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
            <Header></Header>
            <Box sx={{ paddingLeft :2,paddingRight :2 }}>
                { children }
            </Box>
            <Footer></Footer>
        </ThemeProvider>
    );
});
export default Layout;