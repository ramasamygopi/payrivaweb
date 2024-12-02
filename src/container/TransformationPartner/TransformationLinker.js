import React from 'react'
import TransformationPartner from '../../components/TransformationPartner/TransformationPartner';
import Header from '../../partials/header/Header';
import TransformationContent from '../../components/TransformationContent/TransformationContent-one';
import BusinessConversational from '../../components/TransformationContent/BusinessConversation';
import Footer from '../Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop';
const TransformationLinker = () => {
  return (
    <div>
      <Header/>
      <TransformationPartner/>
      <TransformationContent/>
      <BusinessConversational/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default TransformationLinker