import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import DigitalServices from '../container/DigitalServices/DigitalServices.jsx';
import TransformationContent from '../container/DigitalServices/Transformation-content.jsx';
import Solution from '../container/DigitalServices/SolutionService.jsx';
import DigitalSuccess from '../container/DigitalServices/DigitalSuccess.jsx';
import Industries from '../container/DigitalServices/Industries.jsx';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const Work = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva || Digital-Transformation-Service" />
            <Header />
            <DigitalServices/>
            <TransformationContent/>
            <Solution/>
            <DigitalSuccess/>
            <Industries/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Work;