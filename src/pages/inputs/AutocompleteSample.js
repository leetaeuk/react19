import React, {useCallback, useRef, useState} from "react";
import Box from "@mui/material/Box";
import {Autocomplete, Stack, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const AutocompleteSample = () => {
    console.error("AutocompleteSample")

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
    ]

    const valueRef = useRef(top100Films[1]);

    const handleChange = useCallback((_, newValue) => {
        valueRef.current = newValue;
    }, []);
    const handleSubmit = (event) => {
        console.error(valueRef.current)
    }

    return (
        <Box component="section">
            <h1>AutocompleteSample</h1>

            <Stack  direction="row" spacing={1}>
                <Grid item xs={4}>
                    <Autocomplete
                        disablePortal
                        options={top100Films}
                        sx={{ width: 300 }}
                        onChange={handleChange}
                        defaultValue={"The Godfather"}
                        renderInput={
                            (params) => <TextField {...params} label="Movie" />
                        }
                    />
                </Grid>
                <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
            </Stack>
        </Box>
    )
};

export default AutocompleteSample;
