import * as React from 'react';
import "./layout.scss";
import './main.css';
import NavMain from './navmain';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <div className="grid grid--fixed">
                <div className="grid__header">
                    <header>
                        <h1 className="title">bea mombaers</h1>
                    </header>
                </div>
                <div className="grid__submenu">
                    subnav
                </div>
                <div className="grid__menu">
                    <NavMain></NavMain>
                </div>
            </div>
            <div className="grid">
                <div className="grid__content">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}