import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";
import dialogReducer from "./dialogSlice";
import historyReducer from "./historySlice";
import themeReducer from "./themeSlice";
import layoutReducer from "./layoutSlice";
import groundPopupReducer from "./groundPopupSlice";

const store = configureStore({
    reducer: {
        popup: popupReducer.reducer,
        dialog: dialogReducer.reducer,
        history: historyReducer.reducer,
        theme: themeReducer.reducer,
        layout: layoutReducer.reducer,
        groundPopup: groundPopupReducer.reducer,
    },
});

export default store;
