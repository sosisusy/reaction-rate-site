import React from "react";
import { NavLink } from "react-router-dom";

import "layout/Header.scss";

const Header = () => (
    <section className="header">
        <div className="header__container">
            <NavLink to="/" className="logo" >
                <div className="text">Reaction TEST</div>
            </NavLink>
            <nav className="nav">
                <ul className="nav-list">
                    {/* <li><NavLink to="/chart">Chart</NavLink></li> */}
                </ul>
            </nav>
        </div>
    </section>
);

export default Header;
