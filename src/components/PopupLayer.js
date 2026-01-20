import React from "react";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import {Dialog, IconButton, Slide} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import {useCommon} from "../providers/CommonProvider";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PopupLayer = () => {
    console.error("PopupLayer")
    const common = useCommon();
    const { isVisible, popupComponent: PopupComponent, popupProps } = useSelector((state) => state.popup);

    return (
        <Dialog
            fullScreen
            open={isVisible}
            slots={{transition: Transition}}
            onClose={() => { common.util.closePopup(popupProps) }}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => { common.util.closePopup(popupProps) }}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {popupProps.title}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={() => {common.util.closePopup(popupProps)}}>
                        close
                    </Button>
                </Toolbar>
            </AppBar>
            {PopupComponent && <PopupComponent {...popupProps} />}
        </Dialog>
    );
};

export default PopupLayer;
