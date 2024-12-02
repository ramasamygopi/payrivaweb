import {useState, useEffect, useRef} from "react";
import './aboutfour.css'
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const AboutFour = () => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);
    const onVisibilityChange = isVisible => {
        if (isVisible) {
        setDidViewCountUp(true);
        }
    };
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="about-four">
                    <div className="aboutfour-content">
                            <div className="about-funfact">
                                <h2 className="txt">About Payriva</h2>
                                <p>We are an early stage startup based out of Chennai, India. A small team of engineers, started their journey in 2017 (on the new year, to be precise) in a small apartment and we are now a strong team of <strong><VisibilitySensor
                                            onChange={onVisibilityChange}
                                            offset={{ top: 10 }}
                                            delayedCall
                                            >
                                            <strong className="runup"><CountUp className="bod" end={didViewCountUp ? 100 : 0} /></strong>
                                    </VisibilitySensor>+</strong>proud Payriva family.</p>
                                <button>Join Our Team</button>
                            </div>
                    </div>

                    <div className="about-parent" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area about-shape-animation">
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <div className="tilt-content">
                                        <div className="symbol">
                                            <h1>&#8220;</h1>
                                        </div>
                                        <div className="symbol-content">
                                            <p>We are what we repeatedly do.Excellence then, is not an act; but a habit.</p>
                                            <h2>-Aristotle</h2>
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/video-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default AboutFour;
