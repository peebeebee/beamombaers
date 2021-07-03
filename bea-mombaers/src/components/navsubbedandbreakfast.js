import * as React from "react";
import "./navsub.scss";

export default function NavSub() {
    return (
        <nav className="subnav">
            <h2 className="subnavheader">b&b</h2>
            <ul className="subnavlist">
                <li className="subnavlist__item">
                    <a className="subnavlink" href="#">contact</a>
                </li>
                <li className="subnavlist__item">
                    <a className="subnavlink" href="#">policy</a>
                </li>
                <li className="subnavlist__item">
                    <label htmlFor="dropdown-rooms" className="dropdownLabel">rooms</label>
                    <input type="checkbox" id="dropdown-rooms" className="dropdownCheckbox" />
                    <ul className="subnavlist dropdownList">
                        <li className="subnavlist__item">
                            <a className="subnavlink" href="#">master</a>
                        </li>
                        <li className="subnavlist__item">
                            <a className="subnavlink" href="#">standard</a>
                        </li>
                        <li className="subnavlist__item">
                            <a className="subnavlink" href="#">junior</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
