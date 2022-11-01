import React, { useState } from 'react';
import Header from '../components/header';
import NavToggle from '../components/navtoggle';
import NavMain from '../components/navmain';
import Transition from '../components/transition';

export default function Layout({children, location}) {

    const [isNavShown, setIsNavShown] = useState(false);

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
                        onActivate={() => { setIsNavShown(true) }} />
                    <NavMain 
                        onNavigate={() => { setIsNavShown(false) }}
                        isNavShown={isNavShown} />
                </div>
            </div>
        </div>
    )
}