import React from "react";

import "./Nav.css";
const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Christopher Unsell</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Nav;