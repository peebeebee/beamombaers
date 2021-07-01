import * as React from "react";
import * as styles from "./navsub.module.css";

const NavSub = () => {
    return (
        <nav className={styles.subnav}>
            <h2 className={styles.subnavheader}>b&b</h2>
            <ul className={styles.subnavlist}>
                <li className={styles.subnavlist__item}>
                    <a className={styles.subnavlink} href="#">contact</a>
                </li>
                <li className={styles.subnavlist__item}>
                    <a className={styles.subnavlink} href="#">policy</a>
                </li>
                <li className={styles.subnavlist__item}>
                    <label htmlFor="dropdown-rooms" className={styles.dropdownLabel}>rooms</label>
                    <input type="checkbox" id="dropdown-rooms" className={styles.dropdownCheckbox} />
                    <ul className={`${styles.subnavlist} ${styles.dropdownList}`}>
                        <li className={styles.subnavlist__item}>
                            <a className={styles.subnavlink} href="#">master</a>
                        </li>
                        <li className={styles.subnavlist__item}>
                            <a className={styles.subnavlink} href="#">standard</a>
                        </li>
                        <li className={styles.subnavlist__item}>
                            <a className={styles.subnavlink} href="#">junior</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default NavSub;