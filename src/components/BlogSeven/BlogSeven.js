import React from 'react';
import SEO from '../SEO.jsx';
import Header from '../../partials/header/Header.jsx';
import BlogSevenAbout from './BlogSevenAbout.js';
import Footer from '../../container/Footer/Footer.js';
import ScrollToTop from '../ScrollToTop.jsx';

const BlogSeven = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva – Business React JS Template" />
            <Header />
            <BlogSevenAbout/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}
 
export default BlogSeven;