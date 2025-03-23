import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
    name: "dialog",
    initialState: {
        isVisible: false,
        dialogComponent: null, // React 컴포넌트를 직접 저장
        dialogProps: {}, // 팝업에 전달할 추가 데이터 저장
    },
    reducers: {
        showDialog: (state, action) => {
            state.isVisible = true;
            state.dialogComponent = action.payload.component; // 컴포넌트 저장
            state.dialogProps = action.payload.props || {}; // 추가 데이터 저장
        },
        hideDialog: (state) => {
            state.isVisible = false;
            state.dialogComponent = null;
            state.dialogProps = {};
        },
    },
});

export const { showDialog, hideDialog } = dialogSlice.actions;
export default dialogSlice;
