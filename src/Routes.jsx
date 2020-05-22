import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Main from "pages/Main";

export default () => (
    <div>
        <Route exact path="/" component={Main} />
    </div>
);
