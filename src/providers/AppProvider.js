import { Provider } from "react-redux";
import store from "../store";
import React from "react";

const AppProvider = ({ children }) => {
    console.error("AppProvider")
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default AppProvider;
