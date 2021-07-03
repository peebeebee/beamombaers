import * as React from "react";
import Layout from "../components/layout";
import Background from "../components/background";
import { StaticImage } from "gatsby-plugin-image";

export default function HomePage() {
    return (
        <div>
            <Background>
                <StaticImage
                    src="../images/slides/slide_home_01.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
            <Layout />
        </div>
    );
}