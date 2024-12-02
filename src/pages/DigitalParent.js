import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import DigitalServices from '../container/DigitalServices/DigitalServices';
import TransformationContent from '../container/DigitalServices/Transformation-content.jsx';
import Solution from '../container/DigitalServices/SolutionService.jsx';
import SuccessStories from '../components/SuccessStories/SuccessStories.jsx';
import Industries from '../container/DigitalServices/Industries';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
const DigitalParent = () => {
  return (
        <>
            <Header/>
            <DigitalServices/>
            <TransformationContent/>
            <Solution/>
            <SuccessStories/>
            <Industries/>
            <Footer/>
            <ScrollToTop/>
        </>
  )
}
export default DigitalParent