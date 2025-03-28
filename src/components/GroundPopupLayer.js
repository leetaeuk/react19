import React from "react";
import { useSelector } from "react-redux";
import Drawer from '@mui/material/Drawer';
import {useCommon} from "../providers/CommonProvider";

const GroundPopupLayer = () => {
    console.error("GroundPopupLayer")
    const common = useCommon();
    const { isVisible, groundPopupComponent: GroundPopupComponent, groundPopupProps } = useSelector((state) => state.groundPopup);

    return (
        <Drawer
            anchor="bottom"
            open={isVisible}
            onClose={() => {common.util.closeGroundPopup(null, groundPopupProps)}}
        >
            {GroundPopupComponent && <GroundPopupComponent {...groundPopupProps} />}
        </Drawer>
    );
};

export default GroundPopupLayer;
