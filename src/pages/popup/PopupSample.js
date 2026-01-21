import React, {memo} from "react";
import {DialogContentText} from "@mui/material";
import Button from "@mui/material/Button";
import {useCommon} from "../../providers/CommonProvider";

const PopupSample = memo((props) => {
    console.error("PopupSample")
    const common = useCommon();

    return (
        <DialogContentText id="alert-dialog-description" sx={{ padding:2 }}>
            <Button variant="outlined" color="error" onClick={() =>
                // common.util.openDialog( { title: "알림메시지", message: "거래수행 중 오류가 발생하였습니다." })
                common.util.closePopup()
            }>
                Dialog
            </Button>
        </DialogContentText>
    );
});

export default PopupSample;