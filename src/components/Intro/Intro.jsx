import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import './Intro.css'
import background from './background.png';
const Intro =  ({data}) => {
    return (
        <div className="contaiers">
            <div className="intro-content">
                <p className="title">Conversation</p>
                <div className="desc">
                    <h2 data-text="JUST LIKE" id="get">JUST LIKE <span className="sp">HUMAN</span></h2>
                </div>
                <p className='cont'>Every aspect of Customer Experience, from Service to Insights, engage in a Conversation that is Informed, Personalized, and Engaging.<br></br><br></br>
                We help you achieve that.</p>
                <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-primary btn-hover-secondary spl">Show Me How &nbsp;<i class="fas fa-arrow-right"></i></Link>
            </div>
            <div className="intro-section">
                <img src={background} alt="" />
            </div>
        </div>
        
    )
}

Intro.propTypes = {
    data: PropTypes.object
};
  

export default Intro
