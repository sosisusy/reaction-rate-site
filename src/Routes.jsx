import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Main from "pages/Main";
import Chart from "pages/Chart";

export default () => (
    <div>
        <Route exact path="/" component={Main} />
        <Route path="/chart" component={Chart} />
        {/* <Route path="/chart/main" component={Main} /> */}
    </div>
);
