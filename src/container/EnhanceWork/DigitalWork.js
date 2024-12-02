import React from 'react'
import './DigitalWork.css';
 
// import DigitalTransformationImage from '../../assets/images/service/Digital-Transformation.png';
const DigitalWork=()=>{
    return(
        <>
      <div className="Conversational-commerce-service-container">
 
        <div className="commerce-service-left">
            <div>
           <h2>Ultimate Guide to Enhancing Customer Experiences with Conversational Commerce</h2>
            </div>
            <div className='viewers'>
                <p>By Soundhraya</p>
                <p>August 4,2023</p>
                <p>Guide</p>
                <p>5min Read</p>
            </div>
        </div>
           <div className='commerce-service-right'>
              <div className='like-share'>
                <button><i class="fa-regular fa-heart"></i>2</button>
                <button className="share"> <i class="fa-solid fa-share-nodes"></i>Share </button>
                <div className='media'>
              <a href="#">
                <i className="fab fa-twitter-square"></i></a>
                <a href="#"><i className="fab fa-facebook-square"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
               
              </div>
              </div>
             
       
              </div>
        </div>
        <hr id="underline"/>      
     
 
 
 
        <div className="customer-service-container">
        <h2>Enhancing customer Experience with Conversational commerce</h2>
            <div className="customer-say-img">
             
            </div>
        </div>
        </>
    )
}
export default DigitalWork;