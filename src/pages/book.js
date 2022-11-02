import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import "./book.scss";

export function Head() {
    return (
    <>
        <title>Bea Mombaers' book: Items & Interiors</title>
        <meta name="description">This book presents Bea’s work and universe as seen through the lenses of different photographers.</meta>
    </>
    )
}

export default function bookPage() {
    return (
        <div className="page">
            <div className="grid grid--fixed">
                <div className="grid__submenu">
                    <div className="submenu">
                        <h2>book</h2>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="grid__content">
                    <main>
                        <p>available at <a href="https://www.lusterweb.com/">lusterweb.com</a></p>
                    </main>
                </div>
                <div className="grid__book">
                    <div className="book">
                        <StaticImage
                            src="../images/book.png"
                            placeholder="blurred"
                            imgStyle={{objectFit: 'contain'}}
                            alt="Preview of Bea Mombaers' book items & Interiors"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
