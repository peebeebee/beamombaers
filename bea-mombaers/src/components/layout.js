import * as React from 'react';
import "./layout.scss";
import './main.css';
import Header from './header';
import NavMain from './navmain';

export default function Layout(props) {
    return (
        <div className="layout">
            <div className="grid grid--fixed">
                <div className="grid__header">
                    <Header></Header>
                </div>
                <div className="grid__submenu">
                    {props.submenu}
                </div>
                <div className="grid__menu">
                    <NavMain></NavMain>
                </div>
            </div>
            <div className="grid">
                <div className="grid__content">
                    <main>
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    )
}