import React from 'react';
import Header from '../components/header';
import NavMain from '../components/navmain';
import Transition from '../components/transition';

export default function Layout({children, location}) {
    return (
        <div className="layout">
            <Transition location={location} className="page-transition">
                {children}
            </Transition>
            <div className="grid grid--fixed">
                <div className="grid__header">
                    <Header></Header>
                </div>
                <div className="grid__menu">
                    <NavMain></NavMain>
                </div>
            </div>
        </div>
    )
}