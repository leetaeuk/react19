import React, {useEffect} from "react";
import {useCommon} from "../../providers/CommonProvider";
import store from "../../store";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Container, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

const ContainerSample = () => {
    console.error("ContainerSample")
    const common = useCommon();

    useEffect(() => {
        console.warn(JSON.stringify(store.getState().history))
        common.util.setHeader({isShow:true, title:"ContainerSample"})
        common.util.setFooter({isShow:true})
    },[]);

    return (
        <Box component="section">
            <h1>Container Page</h1>

            <Container>
                <Box sx={{ height: '10vh', bgcolor:"orange"}}></Box>
            </Container>

            <br/>

            <Container fixed>
                <Box sx={{ height: '10vh', bgcolor:"orange"}}></Box>
            </Container>
        </Box>
    )
};

export default ContainerSample;
