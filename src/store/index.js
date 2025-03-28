import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";
import dialogReducer from "./dialogSlice";
import historyReducer from "./historySlice";
import themeReducer from "./themeSlice";
import headerReducer from "./headerSlice";
import footerReducer from "./footerSlice";
import loadingReducer from "./loadingSlice";
import groundPopupReducer from "./groundPopupSlice";

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),

    reducer: {
        popup: popupReducer.reducer,
        dialog: dialogReducer.reducer,
        history: historyReducer.reducer,
        theme: themeReducer.reducer,
        header: headerReducer.reducer,
        footer: footerReducer.reducer,
        loading: loadingReducer.reducer,
        groundPopup: groundPopupReducer.reducer,
    },
});

export default store;
