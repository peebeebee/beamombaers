import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Background from "../components/background";

export function Head() {
    return (
    <>
        <title>Bea Mombaers</title>
        <meta name="description">Interior stylist Bea Mombaers is passionate about vintage and design.</meta>
    </>
    )
}

export default function HomePage() {
    return (
        <div className="page">
            <div className="grid grid--fixed">
            </div>
            <Background>
                <StaticImage
                    src="../images/slides/slide_home_01.jpg"
                    alt="Image from Bea's book"
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
        </div>
    );
}