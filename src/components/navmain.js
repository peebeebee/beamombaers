import React from "react";
import { Link } from "gatsby";
import "./navmain.scss";

export default function NavMain({isNavShown, onNavigate}) {

    function onMouseLeave() {
        onNavigate(false);
    }

    return (
        <nav onClick={onNavigate}
             onMouseLeave={onMouseLeave}
             className={isNavShown 
                ? 'nav-main nav-main--shown'
                : 'nav-main nav-main--hidden'}>
            <Link className="nav__item nav__item--about" to="/about">
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
