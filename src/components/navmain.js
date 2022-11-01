import React from "react";
import { Link } from "gatsby";
import "./navmain.scss";

export default function NavMain({isNavShown, onNavigate}) {
    return (
        <nav onClick={() => onNavigate(false)}
             onMouseLeave={() => onNavigate(false)}
             className={isNavShown 
                ? 'nav-main nav-main--shown'
                : 'nav-main nav-main--hidden'}>
            <Link className="nav__item nav__item--about" to="/about" style={{'transitionDelay': '50ms'}}>
                <div>about</div>
            </Link>
            <Link className="nav__item" to="/projects" style={{'transitionDelay': '100ms'}}>
                <div>projects</div>
            </Link>
            <Link className="nav__item" to="/store" style={{'transitionDelay': '150ms'}}>
                <div>store</div>
            </Link>
            <Link className="nav__item" to="/book" style={{'transitionDelay': '200ms'}}>
                <div>book</div>
            </Link>
        </nav>
    );
}
