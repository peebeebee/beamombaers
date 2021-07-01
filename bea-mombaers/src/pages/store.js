import * as React from "react";
import Layout from "../components/layout";
import Background from "../components/background";
import { StaticImage } from "gatsby-plugin-image";

export default function StorePage() {
    return (
        <div>
            <Background>
                <StaticImage
                    src="../images/slides/slide03.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
            <Layout>
                <h1>store</h1>
                <p>
                    Kustlaan 289<br/>
                    8300 Knokke
                </p>
                <p>
                    0032 000 000 000<br/>
                    <a href="mailto:items@beamombaers.com">items@beamombaers.com</a>
                </p>
            </Layout>
        </div>
    )
}
