import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AppProvider from "./providers/AppProvider";
import PopupLayer from "./components/PopupLayer";

const App = () => {
    console.error("App")
    return (
        <Router>
            <AppProvider>
                <AppRoutes />
                <PopupLayer />
            </AppProvider>
        </Router>
    );
};

export default App;
