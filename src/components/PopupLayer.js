import React from "react";
import { useSelector, useDispatch } from "react-redux";
import popupSlice from "../store/popupSlice";
import Button from "@mui/material/Button";
import {Dialog, IconButton} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';

const PopupLayer = () => {
    console.error("PopupLayer")
    const dispatch = useDispatch();
    const { isVisible, popupComponent: PopupComponent, popupProps } = useSelector((state) => state.popup);

    if (!isVisible || !PopupComponent) return null;

    return (
        <Dialog
            fullScreen
            open={isVisible}
            onClose={() => {dispatch(popupSlice.actions.hidePopup())}}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => {dispatch(popupSlice.actions.hidePopup())}}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {popupProps.title}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={() => {dispatch(popupSlice.actions.hidePopup())}}>
                        close
                    </Button>
                </Toolbar>
            </AppBar>
            <PopupComponent {...popupProps} />
        </Dialog>
    );
};

export default PopupLayer;
