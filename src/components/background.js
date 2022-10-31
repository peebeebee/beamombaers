import * as React from "react";
import { useState, Children } from "react";
import "./background.scss";

export default function Background({children}) {

    const [index, setIndex] = useState(0);

    if(children && children.length) {
        setInterval(function() {
            setIndex(index >= children.length - 1 ? 0 : index + 1);
        }, 3000);
    }

    const goToSlide = (i) => {
        setIndex(i);
    }

    return (
        <div className="background">
            <div className="slider">
                {
                    Children.map(children, (child, i) => {
                        return <div className="slider__slide" data-active={i === index}>{child}</div>
                    })
                }
            </div>

            {children && children.length > 1 &&
            <div className="slider-controls">
                {
                    Children.map(children, (child, i) => {
                        return <button type="button" className="slider-control__dot" data-active={i === index} onClick={() => goToSlide(i)}>{i}</button>
                    })
                }
            </div>
            }
        </div>
    )
};