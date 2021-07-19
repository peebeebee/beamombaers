import React from "react"
import { Link } from "gatsby";
import "./nav.scss";

function NavLink({item}) {
    if(!item.children) {
        return (
            <Link className="nav-item" to={item.link}>
                <div className="nav-item__text">{item.text}</div>
            </Link>
        )
    } else {
        return (
            <div>
                <label htmlFor={`dropdown-${item.id}`} className="dropdown-label">{item.text}</label>
                <input type="checkbox" id={`dropdown-${item.id}`} className="dropdown-checkbox" />
                <div className="dropdown-list">
                    <Nav items={item.children} />
                </div>
            </div>
        )
    }
}

export default function Nav(props) {
    return (
        <nav className={`nav ${props.className}`}>
            <ul className="nav__list nav-list">
            {props.items?.map(item =>
                <li className="nav-list__item">
                    <NavLink item={item} />
                </li>
            )}
            </ul>
        </nav>
    )
}