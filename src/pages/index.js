import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Background from "../components/background";

export default function HomePage(props) {
    return (
        <div className="page">
            <div className="grid grid--fixed">
            </div>
            <Background>
                <StaticImage
                    src="../images/slides/slide_home_01.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
        </div>
    );
}