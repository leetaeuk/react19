import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",
    initialState: {
        isShow:false,
        title:"",
    },
    reducers: {
        reset: (state) => {
            state.isShow = false;
            state.title = "";
        },
        headerChange: (state, action) => {
            state.isShow = action.payload.isShow
            state.title = action.payload.title
        },
    },
});

export const { headerChange } = headerSlice.actions;
export default headerSlice;