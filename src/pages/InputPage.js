import React from "react";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import Button from "@mui/material/Button";

const InputPage = () => {
    console.error("InputPage")

    return (
        <Box component="main">
            <h1>InputPage Page</h1>

            <Stack direction="row" spacing={1}>
                <Button variant="contained" color="primary">
                    Go Home
                </Button>
                <Button variant="contained" color="secondary">
                    Show Popup
                </Button>
            </Stack>
        </Box>
    )
};

export default InputPage;
