import * as React from "react";
import Background from "../components/background";
import Header from "../components/header";
import { StaticImage } from "gatsby-plugin-image";
import NavMain from "../components/navmain";
import Nav from "../components/nav";

export default function bedAndBreakfastPage() {
    return (
        <div className="page">
            <div className="grid grid--fixed">
                <div className="grid__header">
                    <Header></Header>
                </div>
                <div className="grid__submenu">
                    <h2>b&b</h2>
                    <Nav
                        title="b&b"
                        items={[{
                            id: 'contact',
                            text: 'contact',
                            link: '/bedandbreakfast/contact'
                        }, {
                            id: 'policy',
                            text: 'policy',
                            link: '/bedandbreakfast/policy'
                        }, {
                            id: 'rooms',
                            text: 'rooms',
                            link: '/bedandbreakfast/rooms',
                            children: [{
                                id: 'master',
                                text: 'master',
                                link: '/bedandbreakfast/master'
                            }, {
                                id: 'standard',
                                text: 'standard',
                                link: '/bedandbreakfast/junior'
                            }, {
                                id: 'junior',
                                text: 'junior',
                                link: '/bedandbreakfast/junior'
                            }]
                        }]}
                    />
                </div>
                <div className="grid__menu">
                    <NavMain></NavMain>
                </div>
            </div>
            <div className="grid">
                <div className="grid__content">
                    <main>
                        <p>
                            On a stunning location in Knokke-le Zoute, close to The Zwin nature reserve, Bea Mombaers B&B offers the weary traveller a beautiful place to stay.
                            Enjoy the most delicious breakfast at the large guest table or in the garden next to the swimming pool.
                            The intimate Bed & Breakfast with a personal hospitality approach is furnished and decorated by interior stylist Bea Mombaers.
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
