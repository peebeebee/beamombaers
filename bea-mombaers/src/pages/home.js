import * as React from "react";
import Layout from "../components/layout";
import Background from "../components/background";
import { StaticImage } from "gatsby-plugin-image";

export default function homePage() {
    return (
        <div>
            <Background>
                <StaticImage
                    src="../images/slides/slide01.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
            <Layout>
                <main></main>
            </Layout>
        </div>
    );
}