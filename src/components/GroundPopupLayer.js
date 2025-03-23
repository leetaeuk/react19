import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Drawer from '@mui/material/Drawer';
import groundPopupSlice from "../store/groundPopupSlice";

const GroundPopupLayer = () => {
    console.error("GroundPopupLayer")
    const dispatch = useDispatch();
    const { isVisible, groundPopupComponent: GroundPopupComponent, groundPopupProps } = useSelector((state) => state.groundPopup);

    if (!isVisible || !GroundPopupComponent) return null;

    return (
        <Drawer
            anchor="bottom"
            open={isVisible}
            onClose={() => {dispatch(groundPopupSlice.actions.hideGroundPopup())}}
        >
            <GroundPopupComponent {...groundPopupProps} />
        </Drawer>
    );
};

export default GroundPopupLayer;
