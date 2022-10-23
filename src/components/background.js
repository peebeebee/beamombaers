import * as React from "react";
import { useState, Children } from "react";
import "./background.scss";

export default function Background({children}) {

    let currentIndex = 0;

    const [index, setIndex] = useState(currentIndex);

    const goToSlide = (i) => {
        console.log('goToSlide', i);
        currentIndex = i;
        setIndex(currentIndex);
        console.log('index', index);
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