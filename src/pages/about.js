import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Background from "../components/background";

import "./about.scss";

export default function AboutPage() {
    return (
        <div className="page">
            <div className="grid grid--fixed grid--about">
                <div className="grid__header">
                </div>
                <div className="grid__picture">
                    <div className="profile-pic">
                        <StaticImage
                            width={250}
                            src="../images/bea.jpg"
                            alt="Bea Mombaers standing in her B&B"
                        />
                    </div>
                </div>
                <div className="grid__social">
                    <div className="social">
                        <a href="mailto:info@beamombaers.com">info@beamombaers.com</a><br />
                        <a href="https://www.instagram.com/itemsbybea">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="grid grid--about">
                <div className="grid__header">
                </div>
                <div className="grid__content">
                    <main className="about-main">
                        <p>
                            Don’t ask Bea to define her style: she lets her interiors speak for themselves.
                            An eclectic mix of vintage furniture, unique collectibles, minimalist design and worldly influences.
                            Everything perfectly balanced and orchestrated down to the last detail.
                            No detail is too trivial, there is never too much or too little.
                            Pure, but always with a certain edginess. Refined, but never blasé.
                            Timeless, but always up to date. Her work is relatable but at the same time in a league of its own.
                            An eternal quest for the perfect imperfection.
                        </p>
                        <p>
                            Over the past thirty years, Bea has seen many trends have their moments on the interior design scene;
                            each time she distills the essential from them and makes them her own in a most creative way.
                            From the patinated cupboards she started with in the early nineties, to the Japanese wabi sabi influences of today.
                            She draws inspiration from books and magazines, from fashion, from her travels, from encounters.
                            She never coasts along on trend waves, but instinctively senses what’s brewing, and interprets the zeitgeist in her own way.
                            And exactly this idiosyncrasy is her strongest calling card.
                            It’s the reason why her clients keep coming back, and eventually become her friends.
                            Bea is always on. Especially at night, she’s overflowing with creativity.
                            If she finds there are things missing in her interior, she has them made.
                            She is an inventor, not a maker.
                            Fortunately, she always knows how to find the right people to translate her ideas into a feasible design.
                            In Axel Van Den Bossche from Serax she found the perfect partner to launch a collection of multifunctional indoor and outdoor furniture, which carries her name, as well as handbags and lifestyle accessories.
                        </p>
                        <p>
                            And in Peter Ivens she found the perfect partner in crime.
                            For over a decade she has been intensively working together with this talented and reputable interior architect.
                            Many of the projects in this book are the result of these two virtuosos’ teamwork.
                            Their roles aren’t exactly divided in the most classic way: both the architect and the decorator
                        </p>
                    </main>
                </div>
            </div>
            {/* <Background></Background> */}
        </div>
    );
}
