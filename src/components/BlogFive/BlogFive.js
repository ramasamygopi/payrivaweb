import React from 'react';
import SEO from '../SEO.jsx';
import Header from '../../partials/header/Header.jsx';
import BlogFiveAbout from './BlogFiveAbout.js';
import Footer from '../../container/Footer/Footer.js';
import ScrollToTop from '../ScrollToTop.jsx'; 
 
 
const BlogFive = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva – Business React JS Template" />
            <Header />
            <BlogFiveAbout/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}
 
export default BlogFive;