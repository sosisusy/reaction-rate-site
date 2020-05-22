import React, { Component } from "react";
import Routes from "src/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import Header from "layout/Header";

class App extends Component {

    render() {
        return (
            <div className="wrap">
                <Router>
                    <Header />
                    <section className="wrap__content">
                        <Routes />
                    </section>
                </Router>
            </div>
        );
    }
}

export default App;