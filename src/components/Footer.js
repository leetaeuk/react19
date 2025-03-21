import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from "@mui/icons-material/Menu";
import { useCommon } from "../providers/CommonProvider";

export default function Footer() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const { common } = useCommon();

    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, }} elevation={3}>
                <BottomNavigation
                    sx={{
                        '& .MuiBottomNavigationAction-root': {
                            color: 'primary.gray',
                            '&.Mui-selected': {
                                color: '#00C7A9',
                            }
                        },
                        backgroundColor:"#FFFFFF"
                    }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        onClick={() => common.locationBack("/")}
                        label="Home"
                        icon={<HomeIcon />}
                    />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}