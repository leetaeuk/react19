import React, {useEffect} from "react";
import Box from "@mui/material/Box";
import {Autocomplete, TextField} from "@mui/material";
import {useCommon} from "../providers/CommonProvider";
import store from "../store";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const AutocompletePage = () => {
    console.error("Autocomplete")
    const common = useCommon();

    useEffect(() => {
        console.warn(JSON.stringify(store.getState().history))
        common.util.setHeader({title:"Autocomplete"})
    },[common]);

    const submit = () => {
    };

    return (
        <Box component="main">
            <h1>Autocomplete</h1>

            <Autocomplete
                id="check1"
                disablePortal
                options={[
                    {label:"test1",year:"1994",value:"1"},
                    {label:"test2",year:"1994",value:"2"},
                    {label:"test3",year:"1994",value:"3"},
                ]}
                sx={{width:300}}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={submit}>
                api
            </Button>
        </Box>
    )
};

export default AutocompletePage;
