import { createSlice } from "@reduxjs/toolkit";

const groundPopupSlice = createSlice({
    name: "groundPopup",
    initialState: {
        isVisible: false,
        groundPopupComponent: null, // React 컴포넌트를 직접 저장
        groundPopupProps: {}, // 팝업에 전달할 추가 데이터 저장
    },
    reducers: {
        showGroundPopup: (state, action) => {
            state.isVisible = true;
            state.groundPopupComponent = action.payload.component; // 컴포넌트 저장
            state.groundPopupProps = action.payload.props || {}; // 추가 데이터 저장
        },
        hideGroundPopup: (state, action) => {
            state.isVisible = false;
            //state.groundPopupComponent = action.payload.component; // 컴포넌트 저장
            state.groundPopupProps = action.payload.props || {}; // 추가 데이터 저장
        },
    },
});

export const { showGroundPopup, hideGroundPopup } = groundPopupSlice.actions;
export default groundPopupSlice;
