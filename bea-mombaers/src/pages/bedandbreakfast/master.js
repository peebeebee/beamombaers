import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Background from "../../components/background";
import NavBedAndBreakfast from "../../components/navbedandbreakfast";

export default function bedAndBreakfastPage() {
    return (
        <div className="page">
            <div className="grid grid--fixed">
                <div className="grid__submenu">
                    <NavBedAndBreakfast />
                </div>
            </div>
            <div className="grid">
                <div className="grid__content">
                    <main>
                        <h3>Master</h3>
                        <p>
                            Our most spacious accommodation with double bed and private bathroom.
                        </p>
                        <p>
                            Price per night: 250 euro (breakfast included)
                        </p>
                        <p>
                            Please read our <Link to="/bedandbreakfast/policy">policy</Link>.
                        </p>
                    </main>
                </div>
            </div>
            <Background>
                <StaticImage
                    src="../images/slides/slide_bb_standard_01.jpg"
                    alt=""
                    layout="fullWidth"
                    aspectRatio={16 / 9}
                />
            </Background>
        </div>
    );
}
