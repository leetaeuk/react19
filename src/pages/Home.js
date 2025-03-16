import React from "react";
import useCommon from "../common/common";
import SamplePopup from "../pages/popup/SamplePopup";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";

const Home = () => {
    console.error("Home")
    const common = useCommon();

    return (
        <>
            <Header title="HOME"></Header>
            <Box component="main" sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 5 }}>
                <h1>Home Page</h1>

                <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="success" onClick={() =>
                        common.navigate("/about", {state:"1"})
                    }>
                        Go to About
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() =>
                        common.popup.show(SamplePopup, { name: "John Doe" }) // SamplePopup 컴포넌트를 전달
                    }>
                        Show Popup
                    </Button>
                    <Button variant="outlined" color="error">
                        Error
                    </Button>
                </Stack>
            </Box>
        </>

    );
};

export default Home;
