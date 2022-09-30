import React from "react"
import {
    TransitionGroup,
    Transition as ReactTransition,
} from "react-transition-group";
import "./transition.scss";

const timeout = 10000;

const defaultStyle = {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
    position: 'absolute',
    zIndex: -100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
}

export default function Transition({children, location}) {
    return (
        <div className="transition">
            <TransitionGroup>
                <ReactTransition
                    key={location.pathname}
                    timeout={{
                        enter: timeout,
                        exit: timeout,
                    }}
                >
                    {state => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                            }}
                        >
                            {children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        </div>
    );
}