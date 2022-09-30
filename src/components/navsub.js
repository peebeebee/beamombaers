import React from "react";
import Nav from "./nav";
import "./navsub.scss";

export default function NavSub(props) {
    return (
        <div className="nav-sub">
            <h2 className="nav-sub__header">
                {props.title}
            </h2>
            <div className="nav-sub__items">
                <Nav items={props.items} />
            </div>
        </div>
    );
}
