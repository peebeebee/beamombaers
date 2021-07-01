import * as React from "react";
import * as styles from "./background.module.css";

export default function Background({children}) {
    return (
        <div className={styles.slider}>
            {
                React.Children.map(children, (child) => {
                    return <div className={styles.slide}>{child}</div>
                })
            }
        </div>
    )
};