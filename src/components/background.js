import React from "react";
import "./background.scss";

export default function Background({children}) {
    return (
        <div className="background">
            {children}
        </div>
    )
};