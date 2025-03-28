import React, {memo} from "react";
import {DialogContentText, Divider} from "@mui/material";

const MenuPopupSample = memo((props) => {
    console.error("MenuPopupSample")

    return (
        <DialogContentText id="alert-dialog-description" sx={{ padding:2 }}>
            <Divider textAlign="left">조회/관리</Divider>
            <p>전체계좌조회</p>
            <p>입출금 거래내역</p>
            <Divider textAlign="left">이체</Divider>
            <p>계좌이체</p>
            <p>다건이체</p>
            <p>이체결과조회</p>
            <p>자동이체</p>
        </DialogContentText>
    );
});

export default MenuPopupSample;