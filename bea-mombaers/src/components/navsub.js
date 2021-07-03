import * as React from "react";
import "./navsub.scss";

export default function NavSub(props) {
    return (
        <nav className="subnav">
            <h2 className="subnavheader">{props.title}</h2>
        </nav>
    );
}
