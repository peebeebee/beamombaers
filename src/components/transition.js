import React from "react"
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "./transition.scss";

export default function Transition({children, location, className = ''}) {

    return (
        <div className={`transition ${className}`}>
            <TransitionGroup>
                <CSSTransition key={location.pathname} timeout={1000}>
                    <div className="transition-item">
                        {children}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}