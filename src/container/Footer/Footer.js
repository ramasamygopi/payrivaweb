import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../components/logo/Logo';
import FooterData from '../../data/Footer/footerItem.json';
import FooterLinkItem from '../../components/Footer/FooterLinkItem.jsx';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-section section footer-bg-color">
            <div className="container">
                <div className="row mb-lg-14 mb-md-10 mb-6 foot">
                    <div className="footer-header">
                        <h1>Let's build something Great, together.</h1>
                        <button>Let's have a Conversation</button>
                    </div>
                    <div className="line"></div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 col-12 mb-6">
                        
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Logo 
                                    image={`${process.env.PUBLIC_URL}/images/logo/footer-logo.png`}
                                />
                            </div>
                            <div className="footer-widget-content">
                                <div className="footer-social-inline">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {FooterData && FooterData.map((single, key) => {
                            return(
                                <div key={key} className=" col-lg-2 col-md-4 col-sm-6 col-6 mb-6">
                                    <FooterLinkItem data={single} key={key} />
                                </div>
                            ); 
                    })}


                </div>

                <div className="row">
                    <div className="col">
                        <p className="copyright">&copy; {new Date().getFullYear()} <strong>Payriva Software LLC</strong>&nbsp; <i class="fa-solid fa-bolt"></i> &nbsp;Atlanta | Chennai | London &nbsp; <i class="fa-solid fa-bolt"></i> &nbsp; Privacy Policy &nbsp;<i class="fa-solid fa-bolt"></i> &nbsp;Terms & Conditions</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
