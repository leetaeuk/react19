import React from "react";
import {useCommon} from "../providers/CommonProvider";
import SamplePopup from "./popup/SamplePopup";
import store from "../store";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";

const Contact = () => {
    console.error("Contact")
    const common = useCommon();
    //const dispatch = useDispatch();
    //console.warn(JSON.stringify(dispatch(historyState())))
    //const hist = useSelector((state) => state.history);
    //console.error(hist.arrHistory)
    console.warn(JSON.stringify(store.getState().history))
    common.util.setHeader({isShow:false, title:"Contact 화면입니다."})

    return (
        <>
            {/*<Header title="HOME"></Header>*/}
            <Box component="main">
                <h1>Contact Page</h1>

                <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="primary" onClick={() => common.util.locationBack("/")}>
                        Go Home
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

export default Contact;
