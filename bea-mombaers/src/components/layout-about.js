import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import "./layout.scss";
import "./main.css";
import NavMain from "./navmain";

export default function LayoutAbout({ children }) {
    return (
        <div className="layout">
            <div className="grid grid--fixed grid--about">
                <div className="grid__header">
                    <header>
                        <h1 className="title">bea mombaers</h1>
                        <div className="profile-pic">
                            <StaticImage
                                width={250}
                                src="../images/bea.jpg"
                                alt="Bea Mombaers standing in her B&B"
                            />
                        </div>
                    </header>
                </div>
                <div className="grid__social">
                    <div className="social">
                        <a href="mailto:info@beamombaers.com">info@beamombaers.com</a><br />
                        <a href="https://www.instagram.com/itemsbybea">Instagram</a>
                    </div>
                </div>
                <div className="grid__menu">
                    <NavMain></NavMain>
                </div>
            </div>
            <div className="grid grid--about">
                <div className="grid__content">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </div>

    )
}