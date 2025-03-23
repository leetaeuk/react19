import React from "react";
import { useSelector, useDispatch } from "react-redux";
import dialogSlice from "../store/dialogSlice";
import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const DialogLayer = () => {
    console.error("DialogLayer")
    const dispatch = useDispatch();
    const { isVisible, dialogComponent: DialogComponent, dialogProps } = useSelector((state) => state.dialog);

    if (!isVisible) return null;

    return (
        <Dialog
            open={isVisible}
            onClose={() => {dispatch(dialogSlice.actions.hideDialog())}}
            scroll="paper"
            sx={{"overflowWrap":"break-word"}}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={true}
        >
            <DialogTitle id="alert-dialog-title">
                {dialogProps.title}
            </DialogTitle>
            <DialogContent dividers={false}>
                <DialogContentText id="alert-dialog-description">{dialogProps.message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {dispatch(dialogSlice.actions.hideDialog())}}>Disagree</Button>
                <Button onClick={() => {dispatch(dialogSlice.actions.hideDialog())}} autoFocus>Agree</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogLayer;
