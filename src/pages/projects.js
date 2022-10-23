import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Background from "../components/background";

export default function projectsPage() {
    return (
        <div className="page">
            <div className="grid grid--fixed">
                <div className="grid__submenu">
                    <div className="submenu">
                        <h2>projects</h2>
                    </div>
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
                    src="../images/slides/slide01.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
                
                <StaticImage
                    src="../images/slides/slide02.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />

                <StaticImage
                    src="../images/slides/slide03.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />

                <StaticImage
                    src="../images/slides/slide04.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
        </div>
    );
}
