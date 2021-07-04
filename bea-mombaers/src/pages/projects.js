import * as React from "react";
import Background from "../components/background";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
import NavMain from "../components/navmain";

export default function projectsPage() {
    return (
        <div className="page">
            <div className="grid grid--fixed">
                <div className="grid__header">
                    <Header></Header>
                </div>
                <div className="grid__submenu">
                    <h2>projects</h2>
                </div>
                <div className="grid__menu">
                    <NavMain></NavMain>
                </div>
            </div>
            <div className="grid">
                <div className="grid__content">
                    <main>
                        <p>an ongoing collaboration with interior architect Peter Ivens</p>
                        <p>
                            <a href="https://peterivens.be/">peterivens.be</a>
                        </p>
                    </main>
                </div>
            </div>
            <Background>
                <StaticImage
                    src="../images/slides/slide02.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
        </div>
    );
}
