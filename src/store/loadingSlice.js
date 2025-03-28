import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        isShow:false,
        title:"",
    },
    reducers: {
        loadingChange: (state, action) => {
            state.isShow = action.payload.isShow
            state.title = action.payload.title
        },
    },
});

export const { loadingChange } = loadingSlice.actions;
export default loadingSlice;