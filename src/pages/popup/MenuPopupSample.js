import React, {memo} from "react";
import {DialogContentText, Divider, Link} from "@mui/material";
import {useCommon} from "../../providers/CommonProvider";

const MenuPopupSample = memo((props) => {
    console.error("MenuPopupSample")
    const common = useCommon();

    return (
        <DialogContentText component="section" id="alert-dialog-description" sx={{ padding:2 }}>
            <Divider textAlign="left">INPUTS</Divider>
            <p><Link color="inherit" component="button" underline="hover" onClick={() => {common.util.locationBack("/inputs/TextFieldSample")}}>{"TextField"}</Link></p>
            <p><Link color="inherit" component="button" underline="hover" onClick={() => {common.util.locationBack("/inputs/AutocompleteSample")}}>{"Autocomplete"}</Link></p>
            <Divider textAlign="left">GRID</Divider>
            <p><Link color="inherit" component="button" underline="hover" onClick={() => {common.util.locationBack("/layout/GridSample")}}>{"Grid"}</Link></p>
            <p><Link color="inherit" component="button" underline="hover" onClick={() => {common.util.locationBack("/layout/ContainerSample")}}>{"Container"}</Link></p>
        </DialogContentText>
    );
});

export default MenuPopupSample;