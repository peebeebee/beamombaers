import * as React from 'react';
import { Link } from 'gatsby';
import "./header.scss";

export default function Header() {
    return (
        <header className="header">
            <h1 className="header__title">
               <Link to="/">bea mombaers</Link>
            </h1>
        </header>
    )
}
