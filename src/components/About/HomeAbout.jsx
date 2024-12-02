// import {useState, useEffect, useRef} from "react";
import SectionTitle from '../SectionTitles/SectionTitle';
import {Link} from "react-router-dom";
import './HomeAbout.css'
const HomeAbout = () => {
    return (
        <div className="section section-padding-t90">
            <div className="container">

                <SectionTitle
                    title="What we do for our customers?"
                    subTitle="Accelerate Digital Transformation for meaningful Business Outcomes"
                />

                <div className="row parent">

                    
                <div className="col-xl-5 col-lg-6 col-12 hov" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                           <div className='sectiontitle'>
                                <div className="sec-img">
                                    <img src='https://www.purpleslate.com/wp-content/uploads/2022/11/purpleslate-home-icn-v2-01.svg'></img>
                                </div>
                                <span className='spn'>Digital Transformation</span>
                           </div>

                            <p>From ideation to implementation, we deliver impactful digital solutions with our highly adaptive teams, solid software engineering practices, and a no-nonsense approach.</p>

                            <Link className="mt-xl-8 mt-lg-8 mt-md-6 mt-4 link" to={process.env.PUBLIC_URL + "/about"}>Know More <span><i className="far fa-angle-down"></i></span></Link>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-12 hov" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <div className='sectiontitle'>
                                <div className="sec-img">
                                    <img src='https://www.purpleslate.com/wp-content/uploads/2022/11/purpleslate-home-icn-v2-02.svg'></img>
                                </div>
                                <span className='spn'>Conversational AI</span>
                            </div>

                            <p>From ideation to implementation, we deliver impactful digital solutions with our highly adaptive teams, solid software engineering practices, and a no-nonsense approach.</p>

                            <Link className="mt-xl-8 mt-lg-8 mt-md-6 mt-4 link" to={process.env.PUBLIC_URL + "/about"}>Know More <span><i className="far fa-angle-down"></i></span></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeAbout;
