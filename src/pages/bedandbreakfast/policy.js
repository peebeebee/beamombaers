import * as React from "react";
import Background from "../../components/background";
import NavBedAndBreakfast from "../../components/navbedandbreakfast";

export default function bedAndBreakfastPolicyPage() {
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
                        <h3>Check in</h3>
                        <p>
                            Check- ins are by appointment only.
                            As we don’t have a front desk, we schedule our days around your estimated time of arrival.
                        </p>
                        <h3>Check out</h3>
                        <p>
                            Check out is at 11 a.m.
                        </p>
                        <h3>Minimum stay</h3>
                        <p>
                            There’s a minimum stay of 2 nights, espicially during high season.
                            During low season and slower calendar times we often make exceptions to this rule.
                        </p>
                        <h3>Short notice availibility</h3>
                        <p>
                            Most of our reservations are booked monthly or weeks ahead of time, however we are happy to accomodate last-minute guests if we can.
                            Sometimes if we have rooms available and ready we can make last-minute exceptions to our two night minimum stay policy as well.
                            Just give us a call or send us an e-mail.
                        </p>
                        <h3>Cancellation policy</h3>
                        <p>
                            If you cancel your reservation 7 days days prior to your arrival your deposit will be refunded.
                            If you cancel your reservation 1-7 days prior to your arrival your deposit will be forfaited.
                        </p>
                        <h3>Deposit</h3>
                        <p>A 50% deposit is required for all reservations.</p>
                    </main>
                </div>
            </div>
            <Background>
            </Background>
        </div>
    );
}
