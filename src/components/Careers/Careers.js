import React from 'react'
import Header from '../../partials/header/Header'
import Footer from '../../container/Footer/Footer'
import ModernTestimonialSlider from './Testimonial'
import CareersLanding from './CareersLanding'
import CareerPage from './CareerPage'
import OpenPosition from './OpenPosition'
import CareersContent from './Careers-content'

const Careers = () => {
  return (
    <>
    <Header/>
    <CareersLanding/>
    <CareersContent/>
    <ModernTestimonialSlider/>
    <CareerPage/>
    <OpenPosition/>
    <Footer/>
    </>
  )
}

export default Careers