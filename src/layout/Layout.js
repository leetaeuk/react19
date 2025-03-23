import * as React from 'react';
import {useSelector} from "react-redux";
import {ThemeProvider} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";

export default function Layout({ children }) {
    console.error("Layout")
    const  {themeProps}  = useSelector((state) => state.theme);

    return (
        <ThemeProvider theme={themeProps}>
            <Header></Header>
                <Box sx={{ paddingLeft :2,paddingRight :2 }}>
                    { children }
                </Box>
            <Footer></Footer>
        </ThemeProvider>
    );
}
