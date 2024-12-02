import React from 'react';
import '../../assets/scss/Service/DigitalSuccess.css'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import { useState } from 'react';
const DigitalSuccess = () => { 
    const [didViewCountUp, setDidViewCountUp] = useState(false);
    const onVisibilityChange = isVisible => {
        if (isVisible) {
        setDidViewCountUp(true);
        }
    };
    return (
        <div className="d-success">
            <div className="d-head">
                <h1>Success Stories</h1>
                <h3>Numbers talking of the digital to define impact we've made</h3>
            </div>
            <div className="d-content">
                <div className="d-one">
                    <h1><strong><VisibilitySensor onChange={onVisibilityChange} offset={{ top: 40 }}delayedCall>
                    <strong className="runup"><CountUp end={didViewCountUp ? 40 : 0} /></strong>
                    </VisibilitySensor><span id='sp-per'>%</span></strong></h1>
                    <h2>Productivity Grains</h2>
                    <p>To the caregivers with our real-time Smart Transcription solution to a leading Pet Care provider.</p>
                </div>
                <div className="d-one">
                    <h1><strong><VisibilitySensor onChange={onVisibilityChange} offset={{ top: 47 }}delayedCall>
                    <strong className="runup"><CountUp end={didViewCountUp ? 47 : 0} /></strong>
                    </VisibilitySensor><span id='sp-per'>%</span></strong></h1>
                    <h2>Increase in Lead Generation</h2>
                    <p>With our Conversational AI solution for a leading health insurance provider.</p>
                </div>
                <div className="d-one">
                    <h1><strong><VisibilitySensor onChange={onVisibilityChange} offset={{ top: 2 }}delayedCall>
                    <strong className="runup"><CountUp end={didViewCountUp ? 2 : 0} /></strong>
                    </VisibilitySensor><span id='sp-per'></span></strong></h1>
                    <h2>Weeks to Beta</h2>
                    <p>For any of your omni-channel Conversational AI solution built on top of our platform components.</p>
                </div>
            </div>
        </div>
    )
}

export default DigitalSuccess;