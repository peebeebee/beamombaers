import * as React from "react";
import Background from "../components/background";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
import NavMain from "../components/navmain";

export default function bookPage() {
    return (
        <div className="page">
            <div className="grid grid--fixed">
                <div className="grid__header">
                    <Header></Header>
                </div>
                <div className="grid__submenu">
                    <h2>book</h2>
                </div>
                <div className="grid__menu">
                    <NavMain></NavMain>
                </div>
            </div>
            <div className="grid">
                <div className="grid__content">
                    <main>
                        <p>available at <a href="https://www.lusterweb.com/">lusterweb.com</a></p>
                    </main>
                </div>
            </div>
            <Background>
                <StaticImage
                    src="../images/slides/slide04.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
        </div>
    );
}
