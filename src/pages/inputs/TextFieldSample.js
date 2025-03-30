import React from "react";
import Box from "@mui/material/Box";
import {Container, Stack, TextField} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const TextFieldSample = () => {
    console.error("TextFieldSample")

    return (
        <Box component="section">
            <h1>TextFieldSample</h1>

            <Stack  direction={{ xs: 'column', sm: 'row' }} sx={{
                justifyContent: "space-between",
                alignItems: "center",
            }} spacing={3}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />
                    <TextField id="outlined-search" label="Search field" type="search" />
                    <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                    />
            </Stack>
            <Stack  direction={{ xs: 'column', sm: 'row' }} sx={{
                justifyContent: "space-between",
                alignItems: "center",
                mt:3
            }} spacing={3}>
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        disabled
                        id="filled-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <TextField
                        id="filled-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        variant="filled"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        id="filled-number"
                        label="Number"
                        type="number"
                        variant="filled"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />
                    <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                    />
                    <TextField
                        id="filled-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="filled"
                    />
            </Stack>
            <Stack  direction={{ xs: 'column', sm: 'row' }} sx={{
                justifyContent: "space-between",
                alignItems: "center",
                mt:3
            }} spacing={3}>
                    <TextField
                        required
                        id="standard-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        variant="standard"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        variant="standard"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />
                    <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        id="standard-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="standard"
                    />
            </Stack>
        </Box>
    )
};

export default TextFieldSample;
