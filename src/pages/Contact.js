import React, {useEffect} from "react";
import {useCommon} from "../providers/CommonProvider";
import PopupSample from "./popup/PopupSample";
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
    useEffect(() => {
        console.warn(JSON.stringify(store.getState().history))
        common.util.setHeader({isShow:true, title:"Contact"})
        common.util.setFooter({isShow:true})
    },[]);

    return (
        <Box component="section">
            <h1>Contact Page</h1>

            <Stack direction="row" spacing={1}>
                <Button variant="contained" color="primary" onClick={() => common.util.locationBack("/")}>
                    Go Home
                </Button>
            </Stack>
        </Box>
    )
};

export default Contact;
