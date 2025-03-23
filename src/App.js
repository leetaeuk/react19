import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./providers/AppProvider";
import PopupLayer from "./components/PopupLayer";
import DialogLayer from "./components/./DialogLayer";
import {CommonProvider} from "./providers/CommonProvider";
import Layout from "./layout/Layout";
import GroundPopupLayer from "./components/GroundPopupLayer";


const App = () => {
    console.error("App");
    return (
        <Router>
            <AppProvider>
                <CommonProvider>
                    <Layout>
                        <AppRoutes />
                        <PopupLayer />
                        <DialogLayer />
                        <GroundPopupLayer />
                    </Layout>
                </CommonProvider>
            </AppProvider>
        </Router>
    );
};

export default App;
