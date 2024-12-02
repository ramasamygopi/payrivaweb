import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import DigitalWork from '../container/EnhanceWork/DigitalWork.js';
import WorkContainer from '../container/EnhanceWork/WorkContainer.js';
import BusinessConvo from '../container/EnhanceWork/BusinessConvo.js';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
 
 
const EnhanceParent = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva || Enhance" />
            <Header />
             <DigitalWork/>
            <WorkContainer />
            <BusinessConvo/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}
 
export default EnhanceParent;