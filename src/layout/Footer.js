import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from "@mui/icons-material/Menu";
import {useCommon} from "../providers/CommonProvider";
import MenuPopupSample from "../pages/popup/MenuPopupSample";
import GroundPopupSample from "../pages/groundPopup/GroundPopupSample";
import {memo} from "react";
import {useSelector} from "react-redux";

const Footer = memo(() => {
    const { isShow } = useSelector((state) => state.footer);
    console.error("Footer", isShow)
    const [value, setValue] = React.useState(0);
    const common = useCommon();

    return (
        <>
            {isShow ? (
                <Box sx={{pb: 7}}>
                    <CssBaseline />
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, }} elevation={3}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction
                                onClick={() => common.util.locationBack("/")}
                                label="Home"
                                icon={<HomeIcon />}
                            />
                            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} onClick={() =>
                                common.util.openGroundPopup(GroundPopupSample, { title: "타이틀" })
                            }/>
                            <BottomNavigationAction label="Menu" icon={<MenuIcon />} onClick={() =>
                                common.util.openPopup(MenuPopupSample, { title: "타이틀" })
                            }/>
                        </BottomNavigation>
                    </Paper>
                </Box>
            ) : <CssBaseline />}
        </>
    );
});

export default Footer;