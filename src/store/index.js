import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";
import historyReducer from "./historySlice";

const store = configureStore({
    reducer: {
        popup: popupReducer,
        history: historyReducer,
    },
});

export default store;
