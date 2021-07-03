import React, {useState, useEffect} from "react";
import { Link } from "gatsby";
import "./navmain.scss";

const NavMain = () => {
    return (
        <nav className="nav">
            <Link className="nav__item" to="/about">
                <div>about</div>
            </Link>
            <Link className="nav__item" to="/projects">
                <div>projects</div>
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

export default NavMain;