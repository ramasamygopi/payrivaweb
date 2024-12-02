import React from 'react';
import TransformationContentTwo from './TransformationContent-two';
import TransformationContentThree from './TransformationContent-three';
import TransformationContentFour from './TransformationContent-four';
import '../../assets/scss/Service/TransformationContent.css';
const TransformationContentOne = () => {
    return (
        <div className="content-pro">
            <div className="ctn">
            <h1>Prologue – The Current State of Digital Transformation Projects</h1>
            <br />
            <div className='pro'>
                <div className="spl-parent">
                    <div id='spl'></div>
                    <h2>When 70 percent of transformations fail, a company needs a proven strategy to beat the odds <a href="#">– McKinsey</a></h2>
                </div>
                <br />
                <p>The world has changed the way it approaches business. Digitalization is taking the driver’s seat, with most of the transactional tasks getting automated at pace. Digital transformation has become a buzzword, with many projects being launched across different functions, business units, industries, and more.</p>
                <p>But the shocking fact is that many digital transformation solutions fail. When Forbes pegged that 84% of digital transformation projects fail, McKinsey settled for 70%, and both are shockingly high. To quote a real-life instance, one organization planned for revamping its existing website. The vendor quoted 6 weeks for the project, while the actual implementation extended beyond 8 months. If a tried and tested digital transformation project like a website can extend well beyond the accepted timelines, think about complex transformation projects involving multiple stakeholders across different business units, and different functions.</p>
                <p>When we dive deeper into this pandemonium, we understand that the reasons for these failures are similar. In a twisted sense of poetic justice, they align with the same three pillars of digital transformation.</p>
                <div className="transform-img">
                    <img src="https://www.purpleslate.com/wp-content/uploads/2023/08/Pic-1-1024x550.png" alt="" />
                </div>
                
                <p>In this guide, we will try to address the issues surrounding the process bottlenecks, how to select the right digital transformation partner, and how to have a successful digital transformation.</p>
            </div>
        </div>
        <TransformationContentTwo/>
        <TransformationContentThree/>
        <TransformationContentFour/>
    </div>
        
    )
}

export default TransformationContentOne;