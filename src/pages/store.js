import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Background from "../components/background";
import "./store.scss";

export function Head() {
    return (
    <>
        <title>Bea Mombaers' store</title>
        <meta name="description" content="Information about Bea Mombaers' store in Knokke" />
    </>
    )
}

export default function StorePage() {
    return (
        <div className="page">
            <div className="grid grid--fixed">
                <div className="grid__submenu">
                    <div className="submenu">
                        <h2>store</h2>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="grid__content grid__content--bottom">
                    <main className="store-content">
                        <p>
                            Kustlaan 289<br/>
                            8300 Knokke
                        </p>
                        <span>
                            0032 50 603 606<br/>
                            <a href="mailto:items@beamombaers.com">items@beamombaers.com</a>
                        </span>
                    </main>
                </div>
            </div>
            <Background>
                <StaticImage
                    src="../images/slides/slide_store_01.jpg"
                    alt="Image of the store"
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                    objectPosition="right"
                />
            </Background>
        </div>
    )
}
