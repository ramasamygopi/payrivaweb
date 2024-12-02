import React from 'react';
import SEO from '../SEO.jsx';
import Header from '../../partials/header/Header.jsx';
import BlogThreeAbout from './BlogThreeAbout.js';
import Footer from '../../container/Footer/Footer.js';
import ScrollToTop from '../ScrollToTop.jsx'; 
 
const BlogThree = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva – Business React JS Template" />
            <Header />
            <BlogThreeAbout/>
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}
 
export default BlogThree;