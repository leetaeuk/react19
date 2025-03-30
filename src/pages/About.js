import React, {useEffect} from "react";
import PopupSample from "./popup/PopupSample";
import {useCommon} from "../providers/CommonProvider";
import store from "../store";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";

const About = () => {
    console.error("About")
    const common = useCommon();

    useEffect(() => {
        console.warn(JSON.stringify(store.getState().history))
        common.util.setHeader({isShow:true, title:"About"})
        common.util.setFooter({isShow:true})
    },[]);

    return (
        <Box component="section">
            <h1>About Page</h1>

            <Stack direction="row" spacing={1}>
                <Button variant="contained" color="primary" onClick={() => common.util.location("/Contact", {state:"1"})}>
                    Go to Contact
                </Button>
                {/*<Button variant="contained" color="secondary" onClick={() =>
                    common.util.openPopup(PopupSample, { title: "타이틀" })
                }>
                    Show Popup
                </Button>
                <Button variant="outlined" color="error" onClick={() =>
                    common.util.openDialog( { title: "알림메시지", message: "거래수행 중 오류가 발생하였습니다." })
                }>
                    Dialog
                </Button>*/}
            </Stack>
        </Box>
    )
};

export default About;
