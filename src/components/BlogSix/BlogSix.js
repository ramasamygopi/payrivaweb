import React from 'react';
import SEO from '../SEO.jsx';
import Header from '../../partials/header/Header.jsx';
import BlogSixAbout from './BlogSixAbout.js';
import Footer from '../../container/Footer/Footer.js';
import ScrollToTop from '../ScrollToTop.jsx';

const BlogSix = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva – Business React JS Template" />
            <Header />
            <BlogSixAbout/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}
 
export default BlogSix;