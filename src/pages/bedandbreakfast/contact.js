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
                        <p>
                            If you have any questions don't hesitate to contact us.
                        </p>
                        <p>
                            <a href="tel:+32475746450">+32 (0)475 746 450</a><br/>
                            <a href="mailto:items@skynet.be">items@skynet.be</a>
                        </p>
                        <p>
                            Hazegrasstraat 37<br/>
                            8300 Knokke
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
