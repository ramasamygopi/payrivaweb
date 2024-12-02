import React from 'react';
import SEO from '../components/SEO.jsx';
import Header from "../partials/header/Header.jsx";
import EventsAbout from '../components/Events/EventsAbout.js';
import PastEvents from '../components/Events/PastEvents.js';
import Footer from '../container/Footer/Footer.js';
import ScrollToTop from '../components/ScrollToTop.jsx';
 
const Events = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva || Events" />
            <Header />
            <EventsAbout/>
            <PastEvents />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}
 
export default Events;