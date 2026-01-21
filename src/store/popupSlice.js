import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: "popup",
    initialState: {
        isVisible: false,
        popupComponent: null, // React 컴포넌트를 직접 저장
        popupProps: {}, // 팝업에 전달할 추가 데이터 저장
    },
    reducers: {
        showPopup: (state, action) => {
            state.isVisible = true;
            state.popupComponent = action.payload.component; // 컴포넌트 저장
            state.popupProps = action.payload.props || {}; // 추가 데이터 저장
        },
        hidePopup: (state, action) => {
            state.isVisible = false;
            state.popupComponent = null;
            state.popupProps = action.payload.props || {}; // 추가 데이터 저장
        },
    },
});

export const { showPopup, hidePopup } = popupSlice.actions;
export default popupSlice;
