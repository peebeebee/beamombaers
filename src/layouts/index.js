import React, { useState } from 'react';
import Header from '../components/header';
import NavToggle from '../components/navtoggle';
import NavMain from '../components/navmain';
import Transition from '../components/transition';

export default function Layout({children, location}) {

    const [isNavShown, setIsNavShown] = useState(false);

    function setActive() {
        setIsNavShown(!isNavShown);
    }

    return (
        <div className="layout">
            <Transition location={location} className="page-transition">
                {children}
            </Transition>
            <div className="grid grid--fixed">
                <div className="grid__header">
                    <Header />
                </div>
                <div className="grid__menu">
                    <NavToggle 
                        isShown={!isNavShown}
                        onActivate={setActive} />
                    <NavMain 
                        onNavigate={setActive}
                        isNavShown={isNavShown} />
                </div>
            </div>
        </div>
    )
}