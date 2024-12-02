import React from 'react';
import CaseStudiess from './CaseStudies.json'
import './CaseStudies.css';
 
 
const CaseStudies=()=>{
    return(
        <>
        <div className='CaseStudy-about-container'>
           <div className='CaseStudy-about-left'>
              <h1>Case Studies</h1>
              <p>Gain in-depth information on how we revolutionize data insights, customer experience, and more</p>
           </div>
           <div className='CaseStudy-about-right'>
          <img src="https://www.purpleslate.com/wp-content/uploads/2022/12/perspective-hero-03-1.png" alt="CaseStudyimg"/>
            </div>
        </div>
 
 
        <div className='PastEvents-Container'>
      <div className="row gx-3 gy-3">
        {CaseStudiess.map((post) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={post.id}>
            <div className="block1">
              <img src={post.image} alt={post.title} className='image'/>
              <p id="color">{post.case}</p>
              <h5>{post.tittle}</h5>
              <p>{post.content}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
 
        </>
    )
}
export default CaseStudies;