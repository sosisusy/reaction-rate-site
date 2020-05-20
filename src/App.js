import React from "react";
import Routes from "src/Routes";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Header from "pages/Header";

function App() {
    return (
        <Router>
            <Header />
            <Routes />
        </Router>
    );
}

export default App;
