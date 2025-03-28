import { createSlice } from "@reduxjs/toolkit";

const footerSlice = createSlice({
    name: "footer",
    initialState: {
        isShow:false,
    },
    reducers: {
        footerChange: (state, action) => {
            state.isShow = action.payload.isShow
        },
    },
});

export const { footerChange } = footerSlice.actions;
export default footerSlice;