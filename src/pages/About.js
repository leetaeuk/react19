import React from "react";
import SamplePopup from "./popup/SamplePopup";
import {useCommon} from "../providers/CommonProvider";
import store from "../store";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";

const About = () => {
    console.error("About")
    const common = useCommon();
    common.util.setHeader({title:"About 화면입니다."})
    console.warn(JSON.stringify(store.getState().history))

    return (
        <>
            {/*<Header title="HOME"></Header>*/}
            <Box component="main">
                <h1>About Page</h1>

                <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="primary" onClick={() => common.util.location("/contact", {state:"1"})}>
                        Go to Contact
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() =>
                        common.util.openPopup(SamplePopup, { title: "타이틀" })
                    }>
                        Show Popup
                    </Button>
                    <Button variant="outlined" color="error" onClick={() =>
                        common.util.openDialog( { title: "알림메시지", message: "거래수행 중 오류가 발생하였습니다." })
                    }>
                        Dialog
                    </Button>
                </Stack>
            </Box>
            {/*<Footer></Footer>*/}
        </>
    )
};

export default About;
