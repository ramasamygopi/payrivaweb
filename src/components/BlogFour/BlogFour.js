import React from 'react';
import SEO from '../SEO.jsx';
import Header from '../../partials/header/Header.jsx';
import BlogFourAbout from './BlogFourAbout.js';
import Footer from '../../container/Footer/Footer.js';
import ScrollToTop from '../ScrollToTop.jsx'; 
 
 
const BlogFour = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva – Business React JS Template" />
            <Header />
            <BlogFourAbout/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}
 
export default BlogFour;