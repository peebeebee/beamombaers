import * as React from 'react';
import * as styles from './layout.module.css';
import "./main.css";
import NavMain from "./navmain";

export default function Layout({ children }) {
  return (
    <div className={styles.grid}>
      <div className={styles.grid__header}>
        <header>
            <h1 className={styles.title}>bea mombaers</h1>
        </header>
      </div>
      <div className={styles.grid__submenu}>
        subnav
      </div>
      <div className={styles.grid__content}>
        <main>
          {children}
        </main>
      </div>
      <div className={styles.grid__menu}>
        <NavMain></NavMain>
      </div>
    </div>
  )
}