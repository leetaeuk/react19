import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import {IconButton} from "@mui/material";

export default function Header(props) {
    return (
        <AppBar position="fixed" color="default">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.title}
                </Typography>
                <IconButton
                    size="large"
                    color="primary"
                    aria-label="profile"
                ><PersonIcon onClick={() => {alert(1)}}/></IconButton>
            </Toolbar>
        </AppBar>
    );
}
