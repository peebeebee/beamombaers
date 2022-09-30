import React from "react";
import { Link } from "gatsby";
import "./navmain.scss";

export default function NavMain() {
    return (
        <nav className="nav-main">
            <Link className="nav__item nav__item--about" to="/about">
                <div>about</div>
            </Link>
            <Link className="nav__item" to="/projects">
                <div>projects</div>
            </Link>
            <Link className="nav__item" to="/bedandbreakfast">
                <div>b&b</div>
            </Link>
            <Link className="nav__item" to="/store">
                <div>store</div>
            </Link>
            <Link className="nav__item" to="/book">
                <div>book</div>
            </Link>
        </nav>
    );
}
