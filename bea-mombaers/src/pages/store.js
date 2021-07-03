import * as React from "react";
import Layout from "../components/layout";
import Background from "../components/background";
import NavSub from "../components/navsub"
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
            <Layout
                submenu={<NavSub title='store' />}
            >
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
