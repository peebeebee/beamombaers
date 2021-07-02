import * as React from "react";
import "./background.scss";

export default function Background({children}) {
    return (
        <div className="slider">
            {
                React.Children.map(children, (child) => {
                    return <div className="slider__slide">{child}</div>
                })
            }
        </div>
    )
};