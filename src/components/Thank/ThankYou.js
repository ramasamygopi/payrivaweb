import React from 'react'
import Header from '../../partials/header/Header'
import Footer from '../../container/Footer/Footer'
import ScrollToTop from '../ScrollToTop'
import Thankcontent from './Thank-content'
import Thankfeature from './Thank-feature'

const ThankYou = () => {
  return (
    <>  
        <Header/>
        <Thankcontent/>
        <Thankfeature/>
        <Footer/>
        <ScrollToTop/>
    </>
  )
}

export default ThankYou