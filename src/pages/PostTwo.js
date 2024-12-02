import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import EventsAbout from '../components/Events/EventsAbout.js';
import PostTwoNavigate from '../components/Events/PostTwoNavigate.js';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
const PostTwo = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva || Contact" />
            <Header />
            <EventsAbout/>
            <PostTwoNavigate/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}
 
export default PostTwo;