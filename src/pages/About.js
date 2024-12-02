import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import AboutFour from '../container/About/AboutFour';
import Video from '../container/Video/Video';
import AboutFive from '../container/About/AboutFive';
import TestimonialContainer from '../container/Testimonial/TestimonialContainer';
import CallToActionTwo from '../container/CallToAction/CallToActionTwo';
import OurCulture from '../components/OurCulture/OurCulture.jsx';
import DriveUs from '../components/DriveUs/DriveUs.jsx';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';




const AboutUs = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva || About" />
            <Header />
            <Breadcrumb/>
            <AboutFour />
            <Video />
            <AboutFive />
            <TestimonialContainer classOption="bg-primary-blue" />
            <CallToActionTwo />
            <OurCulture/>
            <DriveUs/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default AboutUs;


