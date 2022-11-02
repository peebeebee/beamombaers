import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Slider from "../components/slider";

import "./projects.scss";

export function Head() {
    return (
    <>
        <title>Bea Mombaers' projects</title>
        <meta name="description">A peek into the different projects that Bea delivered.</meta>
    </>
    )
}

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
                    <main className="project-content">
                        <p>an ongoing collaboration with interior architect Peter Ivens</p>
                        <span>
                            <a href="https://peterivens.be/">peterivens.be</a>
                        </span>
                    </main>
                </div>
            </div>
            <Slider>
                <div className="split">
                    <div className="split__item">
                    </div>
                    <div className="split__item split__item--padding">
                        <StaticImage
                                src="../images/slides/slide_project_01.jpg"
                                alt=""
                                layout="fullWidth"
                        />
                    </div>
                </div>

                <StaticImage
                        src="../images/slides/slide_project_02.jpg"
                        alt=""
                        layout="fullWidth"
                />

                <div className="split">
                    <div className="split__item split__item--padding">
                        <StaticImage
                            src="../images/slides/slide_project_03a.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                    <div className="split__item">
                        <StaticImage
                            src="../images/slides/slide_project_03b.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                </div>

                <div className="split">
                    <div className="split__item split__item">
                        <StaticImage
                            src="../images/slides/slide_project_04a.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                    <div className="split__item split__item--padding">
                        <StaticImage
                            src="../images/slides/slide_project_04b.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                </div>

                <div className="split">
                    <div className="split__item">
                        <StaticImage
                            src="../images/slides/slide_project_05a.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                    <div className="split__item split__item--padding">
                        <StaticImage
                            src="../images/slides/slide_project_05b.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                </div>

                <div className="split">
                    <div className="split__item">
                        <StaticImage
                            src="../images/slides/slide_project_06a.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                    <div className="split__item">
                    </div>
                </div>

                <div className="split">
                    <div className="split__item split__item--padding">
                        <StaticImage
                            src="../images/slides/slide_project_07a.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                    <div className="split__item">
                        <StaticImage
                            src="../images/slides/slide_project_07b.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                </div>

                <div className="split">
                    <div className="split__item split__item--padding">
                        <StaticImage
                            src="../images/slides/slide_project_08a.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                    <div className="split__item">
                        <StaticImage
                            src="../images/slides/slide_project_08b.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                </div>

                <div className="split">
                    <div className="split__item split__item--padding">
                        <StaticImage
                            src="../images/slides/slide_project_09a.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                    <div className="split__item">
                        <StaticImage
                            src="../images/slides/slide_project_09b.jpg"
                            alt=""
                            layout="fullWidth"
                        />
                    </div>
                </div>
            </Slider>
        </div>
    );
}
