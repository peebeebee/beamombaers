import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./navmain.module.css";

const NavMain = () => {
    return (
        <nav className={styles.nav}>
            <Link className={styles.nav__item} to="/about">
                <div>about</div>
            </Link>
            <Link className={styles.nav__item} to="/projects">
                <div>projects</div>
            </Link>
            <Link className={styles.nav__item} to="/store">
                <div>store</div>
            </Link>
            <Link className={styles.nav__item} to="/book">
                <div>book</div>
            </Link>
        </nav>
    );
}

export default NavMain;