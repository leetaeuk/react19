import { createSlice } from "@reduxjs/toolkit";
import {createTheme} from "@mui/material";

const defaultTheme = createTheme({
    palette: {
        isDefaultTheme : true,
        mode: 'dark',
        /*primary: {
            main: '#00C7A9',
        },*/
    },
});
const whiteTheme = createTheme({
    palette: {
        isDefaultTheme : false,
        mode: 'light',
        /*primary: {
            main: '#00C7A9',
        },*/
    },
});

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: defaultTheme,
    },
    reducers: {
        darkTheme: (state) => {
            state.theme = defaultTheme;
        },
        lightTheme: (state) => {
            state.theme = whiteTheme;
        },
    },
});

export const { themeChange } = themeSlice.actions;
export default themeSlice;
