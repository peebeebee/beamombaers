import * as React from "react";
import Layout from "../components/layout";
import Background from "../components/background";
import { StaticImage } from "gatsby-plugin-image";

export default function bookPage() {
    return (
        <div>
            <Background>
                <StaticImage
                    src="../images/slides/slide04.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
            <Layout>
                <main>
                    <p>available at <a href="https://www.lusterweb.com/">lusterweb.com</a></p>
                </main>
            </Layout>
        </div>
    );
}
