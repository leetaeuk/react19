import React, {useCallback, useEffect} from "react";
import {useCommon} from "../providers/CommonProvider";
import PopupSample from "./popup/PopupSample";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import store from "../store";

const Home = () => {
    console.error("Home")
    const common = useCommon();

    useEffect(() => {
        console.warn(JSON.stringify(store.getState().history))
        common.util.setHeader({title:"Home 화면입니다."})
    },[]);

    const submit = useCallback(async () => {
        const response = await common.api.post("/robots.txt", {});
    }, [common]);

    return (
        <Box component="main">
            <h1>Home Page</h1>

            <Stack direction="row" spacing={1}>
                <Button variant="contained" color="primary" onClick={() =>
                    common.util.location("/about", {state:"1"})
                }>
                    Go to About
                </Button>
                <Button variant="contained" color="secondary" onClick={() =>
                    common.util.openPopup(PopupSample, { title: "타이틀" })
                }>
                    Show Popup
                </Button>
                <Button variant="outlined" color="error" onClick={() =>
                    common.util.openDialog({ title: "알림메시지", message: "거래수행 중 오류가 발생하였습니다." })
                }>
                    Dialog
                </Button>
                <Button variant="contained" endIcon={<SendIcon />} onClick={submit}>
                    api
                </Button>
            </Stack>
        </Box>
    );
};

export default Home;
