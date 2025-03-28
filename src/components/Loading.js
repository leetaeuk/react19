import {Backdrop, CircularProgress} from "@mui/material";
import * as React from "react";
import {memo} from "react";
import {useSelector} from "react-redux";

const Loading = memo(() => {
    const { isShow, title } = useSelector((state) => state.loading);
    console.error("Loading", isShow)
    return (
        <Backdrop sx={(theme) => ({ color:"#fff", zIndex: theme.zIndex.drawer+1})} open={isShow}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    )
});

export default Loading;