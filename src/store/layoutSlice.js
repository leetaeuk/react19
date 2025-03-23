import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
    name: "layout",
    initialState: {
        layout: {
            header:{isShow:true, title:""},
            footer:{isShow:true},
        },
    },
    reducers: {
        headerChange: (state, action) => {
            state.layout = action.payload.header
        },
    },
});

export const { change } = layoutSlice.actions;
export default layoutSlice;
