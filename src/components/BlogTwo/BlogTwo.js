import React from 'react';
import SEO from '../SEO.jsx';
import Header from '../../partials/header/Header.jsx';
import BlogTwoAbout from './BlogTwoAbout.js';
import Footer from '../../container/Footer/Footer.js';
import ScrollToTop from '../ScrollToTop.jsx';
 
const BlogTwo = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva || Home Two" />
            <Header />
            <BlogTwoAbout/>
            <Footer />
            <ScrollToTop/>
        </React.Fragment>
    )
}
 
export default BlogTwo;