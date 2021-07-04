import React from "react"
import { Link } from "gatsby";

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
                <label htmlFor="dropdown-rooms" className="dropdown-label">rooms</label>
                <input type="checkbox" id="dropdown-rooms" className="dropdown-checkbox" />
                <Nav items={item.children} />
            </div>
        )
    }
}

export default function Nav(props) {
    return (
        <nav className="nav">
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