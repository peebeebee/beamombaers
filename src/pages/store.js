import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Background from "../components/background";
import Header from "../components/header";

export default function StorePage() {
    return (
        <div className="page">
            <div className="grid grid--fixed">
                <div className="grid__header">
                    <Header></Header>
                </div>
                <div className="grid__submenu">
                    <div className="submenu">
                        <h2>store</h2>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="grid__content">
                    <main>
                        <p>
                            Kustlaan 289<br/>
                            8300 Knokke
                        </p>
                        <p>
                            0032 50 603 606<br/>
                            <a href="mailto:items@beamombaers.com">items@beamombaers.com</a>
                        </p>
                    </main>
                </div>
            </div>
            <Background>
                <StaticImage
                    src="../images/slides/slide03.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
        </div>
    )
}
