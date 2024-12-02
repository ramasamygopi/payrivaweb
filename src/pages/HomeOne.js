import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import IntroSlider from '../container/IntroSlider/IntroSlider';
import HomeAbout from '../components/About/HomeAbout.jsx';
import HomeAbout2 from '../components/About2/HomeAbout2.jsx';
import ServiceIconBox from '../container/service/ServiceIconBox';
import BusinessPartners from '../components/BusinessPartner/BusinessPartner.jsx';
import SuccessStories from '../components/SuccessStories/SuccessStories.jsx';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';



const HomeOne = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva – Home" />
            <Header />
            <IntroSlider />
            <HomeAbout />
            <HomeAbout2/>
            <ServiceIconBox classOption="bg-color-1" />
            <BusinessPartners/>
            <SuccessStories/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeOne;