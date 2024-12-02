import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import ContactLanding from '../components/ContactFrom/ContactLanding.jsx';
import ContactFromContainer from '../container/ContactFromContainer/ContactFromContainer';
import ContactImage from '../components/ContactFrom/ContactImage.jsx';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';

const Contact = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva || Contact" />
            <Header />
            <ContactLanding/>
            <ContactFromContainer />
            <ContactImage/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Contact;
