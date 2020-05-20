import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Main from "pages/Main";
import Sub from "pages/Sub";

export default () => (
    <div>
        <Route path="/main" component={Main} />
        <Route path="/sub" component={Sub} />
    </div>
);
