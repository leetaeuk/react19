import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import Drawer from '@mui/material/Drawer';
import {useCommon} from "../providers/CommonProvider";
import {Slide} from "@mui/material";
import {clearGroundPopup} from "../store/groundPopupSlice";

const GroundPopupLayer = () => {
    console.error("GroundPopupLayer")
    const common = useCommon();
    const dispatch = useDispatch();
    const { isVisible, groundPopupComponent: GroundPopupComponent, groundPopupProps } = useSelector((state) => state.groundPopup);
    const handleExited = useCallback(() => {
        dispatch(clearGroundPopup());
    }, [dispatch]);

    return (
        <Drawer
            anchor="bottom"
            open={isVisible}
            onClose={() => {common.util.closeGroundPopup(null, groundPopupProps)}}
            TransitionProps={{ onExited: handleExited }}
        >
            {GroundPopupComponent && <GroundPopupComponent {...groundPopupProps} />}
        </Drawer>
    );
};

export default GroundPopupLayer;
