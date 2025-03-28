import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {useCommon} from "../providers/CommonProvider";

const DialogLayer = () => {
    console.error("DialogLayer")
    const common = useCommon();
    const { isVisible, dialogProps } = useSelector((state) => state.dialog);

    return (
        <Dialog
            open={isVisible}
            onClose={() => { common.util.closeDialog(dialogProps) } }
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
                <Button onClick={() => {common.util.closeDialog(dialogProps)}}>Disagree</Button>
                <Button onClick={() => {common.util.closeDialog(dialogProps)}} autoFocus>Agree</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogLayer;
