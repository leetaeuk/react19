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
        themeProps: defaultTheme, // 팝업에 전달할 추가 데이터 저장
    },
    reducers: {
        darkTheme: (state) => {
            state.themeProps = defaultTheme;
        },
        lightTheme: (state) => {
            state.themeProps = whiteTheme;
        }
    },
});

export const { darkTheme, lightTheme } = themeSlice.actions;
export default themeSlice;
