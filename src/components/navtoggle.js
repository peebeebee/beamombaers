import React from "react";
import "./navtoggle.scss";

export default function NavToggle({isShown, onActivate}) {

    function onMouseEnter() {
        onActivate(true);
    }

    function onClick() {
        onActivate(true);
    }

    return (
        <button 
            className={isShown 
                ? 'nav-toggle nav-toggle--shown' 
                : 'nav-toggle nav-toggle--hidden'}
            onClick={onClick}
            onMouseEnter={onMouseEnter}>
            menu
        </button>
    );
}
