import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import NavMain from "./navmain";
import Header from './header';
import "./layout.scss";
import "./main.css";

export default function LayoutAbout(props) {
    return (
        <div className="layout">
            <div className="grid grid--fixed grid--about">
                <div className="grid__header">
                    <Header></Header>
                    <br />
                    <div className="profile-pic">
                        <StaticImage
                            width={250}
                            src="../images/bea.jpg"
                            alt="Bea Mombaers standing in her B&B"
                        />
                    </div>
                </div>
                <div className="grid__social">
                    <div className="social">
                        <a href="mailto:info@beamombaers.com">info@beamombaers.com</a><br />
                        <a href="https://www.instagram.com/itemsbybea">Instagram</a>
                    </div>
                </div>
                <div className="grid__submenu">
                    {props.submenu}
                </div>
                <div className="grid__menu">
                    <NavMain></NavMain>
                </div>
            </div>
            <div className="grid grid--about">
                <div className="grid__content">
                    <main>
                        {props.children}
                    </main>
                </div>
            </div>
        </div>

    )
}