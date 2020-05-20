import React from "react";
import { NavLink } from "react-router-dom";

import "layout/Header.scss";

const Header = () => (
    <section className="header">
        <NavLink to="/main">url1</NavLink>
        <NavLink to="/sub">url2</NavLink>
    </section>
);

export default Header;
