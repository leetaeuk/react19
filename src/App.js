import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./providers/AppProvider";
import PopupLayer from "./components/PopupLayer";
import DialogLayer from "./components/DialogLayer";
import {CommonProvider} from "./providers/CommonProvider";
import Layout from "./layout/Layout";
import GroundPopupLayer from "./components/GroundPopupLayer";
import Loading from "./components/Loading";
import NavigatorProvider from "./providers/NavigatorProvider";

const BASE_PATH = process.env.REACT_APP_BASENAME || "/"

const App = () => {
    console.error("App");

    return (
        <Router basename={BASE_PATH}>
            <AppProvider>
                <CommonProvider>
                    <NavigatorProvider />
                    <Layout>
                        <AppRoutes />
                        <PopupLayer />
                        <DialogLayer />
                        <GroundPopupLayer />
                        <Loading />
                    </Layout>
                </CommonProvider>
            </AppProvider>
        </Router>
    );
};

export default App;
