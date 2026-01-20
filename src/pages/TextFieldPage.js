import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";
import {useCommon} from "../providers/CommonProvider";
import store from "../store";

const TextFieldPage = () => {
    console.error("TextField")
    const common = useCommon();

    useEffect(() => {
        console.warn(JSON.stringify(store.getState().history))
        common.util.setHeader({title:"TextField"})
    },[common]);

    return (
        <Box component="main">
            <h1>InputPage Page</h1>

            <Stack direction="row" spacing={1}>
                <Button variant="contained" color="primary" onClick={() =>
                    common.util.locationBack("/")
                }>
                    Go Home
                </Button>
            </Stack>
        </Box>
    )
};

export default TextFieldPage;
