import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./providers/AppProvider";
import PopupLayer from "./components/PopupLayer";
import {CommonProvider} from "./providers/CommonProvider";


const App = () => {
    console.error("App")
    return (
        <Router>
            <AppProvider>
                <CommonProvider>
                    <AppRoutes />
                    <PopupLayer />
                </CommonProvider>
            </AppProvider>
        </Router>
    );
};

export default App;
