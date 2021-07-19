import React from "react";
import NavSub from "./navsub";

export default function NavBedAndBreakfast() {
    return (
        <NavSub
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
                    link: '/bedandbreakfast/standard'
                }, {
                    id: 'junior',
                    text: 'junior',
                    link: '/bedandbreakfast/junior'
                }]
            }]}
        />
    )
}