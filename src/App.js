import React from "react";
import Routes from "src/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import Header from "layout/Header";

function App() {
    return (
        <div className="wrap">
            <Router>
                <Header />
                <Routes />
            </Router>
        </div>
    );
}

export default App;
