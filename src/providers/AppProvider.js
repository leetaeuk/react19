import { Provider } from "react-redux";
import store from "../store";
import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react";

const AppProvider = ({ children }) => {
    console.error("AppProvider")
    return (
        <Provider store={store}>
            {children}
            <Footer></Footer>
        </Provider>
    );
};

export default AppProvider;
