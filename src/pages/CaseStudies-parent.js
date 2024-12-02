import React from 'react';
import SEO from '../components/SEO.jsx';
import Header from '../partials/header/Header.jsx';
import CaseStudies from '../components/CaseStudies/CaseStudies.js';
import Footer from '../container/Footer/Footer.js';
import ScrollToTop from '../components/ScrollToTop.jsx';

const CaseStudiesParent = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva || Case Studies" />
            <Header />
           <CaseStudies/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}
 
export default CaseStudiesParent;