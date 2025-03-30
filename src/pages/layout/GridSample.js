import React, {useEffect} from "react";
import {useCommon} from "../../providers/CommonProvider";
import store from "../../store";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Container, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

const GridSample = () => {
    console.error("GridSample")
    const common = useCommon();

    useEffect(() => {
        console.warn(JSON.stringify(store.getState().history))
        common.util.setHeader({isShow:true, title:"GridSample"})
        common.util.setFooter({isShow:true})
    },[]);

    return (
        <Box component="section">
            <h1>Grid Page</h1>

            <Grid container spacing={1} sx={{mb:3}}>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={12} >
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Hello World"
                        />
                    {/*<Box bgcolor="primary.main" color="info.contrastText" p={2}>
                        1
                    </Box>*/}
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box bgcolor="warning.main" color="info.contrastText" p={2}>
                        2
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor="warning.main" color="info.contrastText" p={2}>
                        3
                    </Box>
                </Grid>

                <Grid item xs={6} sm={3}>
                    <Box bgcolor="error.main" color="info.contrastText" p={2}>
                        4
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box bgcolor="error.main" color="info.contrastText" p={2}>
                        5
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box bgcolor="error.main" color="info.contrastText" p={2}>
                        6
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box bgcolor="error.main" color="info.contrastText" p={2}>
                        7
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default GridSample;
