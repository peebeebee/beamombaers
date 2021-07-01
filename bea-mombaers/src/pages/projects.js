import * as React from "react";
import Layout from "../components/layout";
import Background from "../components/background";
import { StaticImage } from "gatsby-plugin-image";

export default function projectsPage() {
    return (
        <div>
            <Background>
                <StaticImage
                    src="../images/slides/slide02.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
            <Layout>
                <main>
                    <p>an ongoing collaboration with interior architect Peter Ivens</p>
                    <p>
                        <a href="https://peterivens.be/">peterivens.be</a>
                    </p>
                </main>
            </Layout>
        </div>
    );
}
