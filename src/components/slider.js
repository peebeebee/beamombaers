import React from "react";
import { useState, Children, useEffect } from "react";
import "./slider.scss";

export default function Slider({children}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(children && children.length) {
            const interval = setInterval(() => {
                setIndex(index >= children.length - 1 ? 0 : index + 1);
            }, 3000);
    
            return () => {
                clearInterval(interval);
            };
        }
    });

    return (
        <div className="slider">
            <div className="slides">
                {
                    Children.map(children, (child, i) => {
                        return <div className="slides__slide" data-active={i === index}>{child}</div>
                    })
                }
            </div>

            {children && children.length > 1 &&
            <div className="slider-controls">
                {
                    Children.map(children, (child, i) => {
                        return <button type="button" className="slider-control__dot" data-active={i === index} onClick={() => setIndex(i)}>{i}</button>
                    })
                }
            </div>
            }
        </div>
    )
};