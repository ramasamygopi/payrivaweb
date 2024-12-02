import React from 'react'
import Header from "../partials/header/Header";
import SEO from '../components/SEO.jsx';
import ServiceAbout from '../container/Convo-Service/ServiceAbout.js';
import AIUseCase from '../container/Convo-Service/AIUseCase.js';
import Measurable from '../container/Convo-Service/Measurable.js';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
const ConvoService = () => {
  return (
        <React.Fragment>
            <SEO title="Payriva || Service" />
            <Header />
            <ServiceAbout/>
            <AIUseCase/>
            <Measurable />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
  )
}

export default ConvoService

// import React from 'react';
// import SEO from '../components/SEO';
// import Header from "../partials/header/Header";
// import ServiceAbout from '../container/service/ServiceAbout';
// import AIUseCase from '../container/service/AIUseCase';
// import Measurable from '../container/Measurable/Measurable.js';
// import Footer from '../container/Footer/Footer';
// import ScrollToTop from '../components/ScrollToTop.jsx';