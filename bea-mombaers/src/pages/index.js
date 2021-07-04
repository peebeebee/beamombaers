import * as React from "react";
import Background from "../components/background";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
import NavMain from "../components/navmain";

export default function HomePage() {
    return (
        <div className="page">
            <div className="grid grid--fixed">
                <div className="grid__header">
                    <Header></Header>
                </div>
                <div className="grid__menu">
                    <NavMain></NavMain>
                </div>
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