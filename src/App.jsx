import React, { Component } from "react";
import Routes from "src/Routes";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import "./App.scss";

import Header from "layout/Header";

class App extends Component {

    render() {
        return (
            <div className="wrap">
                <HashRouter>
                    <Header />
                    <section className="wrap__content">
                        <Routes />
                    </section>
                </HashRouter>
            </div>
        );
    }
}

export default App;
