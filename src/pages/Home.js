import React from "react";
import { useCommon } from "../providers/CommonProvider";
import SamplePopup from "../pages/popup/SamplePopup";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";
import store from "../store";
import Footer from "../components/Footer";

const Home = () => {
    console.error("Home")
    const { common } = useCommon();
    //const dispatch = useDispatch();
    console.warn(JSON.stringify(store.getState().history))

    return (
        <>
            <Header title="HOME"></Header>
            <Box component="main" sx={{ paddingLeft: 2, paddingRight: 2, paddingTop: 6 }}>
                <h1>Home Page</h1>

                <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="success" onClick={() =>
                        common.location("/about", {state:"1"})
                    }>
                        Go to About
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() =>
                        common.openPopup(SamplePopup, { name: "John Doe" }) // SamplePopup 컴포넌트를 전달
                    }>
                        Show Popup
                    </Button>
                    <Button variant="outlined" color="error">
                        Error
                    </Button>
                </Stack>
            </Box>
            <Footer></Footer>
        </>
    );
};

export default Home;
