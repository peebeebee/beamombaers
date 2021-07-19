import React from "react"
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "./transition.scss";

export default function Transition({children, location}) {
    return (
        <div className="transition">
            <TransitionGroup>
                <CSSTransition key={location.pathname} timeout={500}>
                    <div className="transition__item transition-item">
                        {children}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}