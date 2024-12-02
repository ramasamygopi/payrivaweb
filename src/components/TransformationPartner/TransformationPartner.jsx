import React from 'react';
import CurrentDate from '../Date';
import { useState } from 'react';
import bg from './bg.jpg'
import '../../assets/scss/Service/Transformation.css';
const TransformationPartner = () => {


  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

    return (
        <div className="TransformationPartner">
            <div className="TransformationLanding">
                <div className="landingcontent">
                    <h1>A Guide to Selecting the Right Partner for Your Digital Transformation Efforts</h1>
                    <div className="landingauthor">
                        <p>By Sridhar CS</p>
                        <p><CurrentDate/></p>
                        <p>Guide</p>
                        <p>7 mins read</p>
                    </div>
                </div>
                <div className="hovereffect">
                    <button onClick={handleClick}><i class="fa-regular fa-heart"></i>&nbsp;{count}</button>
                    <button className='share'><font><i class="fa-solid fa-share-nodes"></i>Share</font><span></span></button>
                    <div className="media">
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="transformation-img">
                <img src={bg} alt="" />
            </div>
        </div>
    )
}

export default TransformationPartner;