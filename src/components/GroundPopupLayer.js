import {useDispatch, useSelector} from "react-redux";
import Drawer from '@mui/material/Drawer';
import {useCommon} from "../providers/CommonProvider";
import {clearGroundPopup} from "../store/groundPopupSlice";

const GroundPopupLayer = () => {
    console.error("GroundPopupLayer")
    const common = useCommon();
    const dispatch = useDispatch();
    const { isVisible, groundPopupComponent: GroundPopupComponent, groundPopupProps } = useSelector((state) => state.groundPopup);

    return (
        <Drawer
            anchor="bottom"
            open={isVisible}
            onClose={() => {common.util.closeGroundPopup(null, groundPopupProps)}}
            slotProps={{
                transition: {
                    onExited: () => dispatch(clearGroundPopup()),
                },
            }}
        >
            {GroundPopupComponent && <GroundPopupComponent {...groundPopupProps} />}
        </Drawer>
    );
};

export default GroundPopupLayer;