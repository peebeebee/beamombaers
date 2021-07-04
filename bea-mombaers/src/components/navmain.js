import React from "react";
import { Link } from "gatsby";
import "./navmain.scss";

const NavMain = () => {
    return (
        <nav className="nav-main">
            <Link className="nav__item" to="/about">
                <div>about</div>
            </Link>
            <Link className="nav__item" to="/store">
                <div>store</div>
            </Link>
            <Link className="nav__item" to="/book">
                <div>book</div>
            </Link>
            <Link className="nav__item" to="/bedandbreakfast">
                <div>b&b</div>
            </Link>
            <Link className="nav__item" to="/projects">
                <div>projects</div>
            </Link>
        </nav>
    );
}

export default NavMain;