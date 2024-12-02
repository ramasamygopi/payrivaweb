import React from 'react';
import './BusinessConvo.css';

const BusinessConvo = () => {
  return (
    <>
      <div className='BusinessConversational-container'>
        <h3>Imagining the first step of your business’s conversational journey is often challenging. If you need help understanding conversational commerce, we got you covered!</h3>

        <div className='pandbutton-container'>
          <p> Get in Touch with our Experts</p>
          <button><i className="fas fa-arrow-right"></i> </button>
        </div>
      </div>

      {/* Related posts */}
      <div className="Related-post-container">
        <h2>Related Posts</h2>
        <div className="row gx-4 gy-4">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="block1">
              <img src='https://www.purpleslate.com/wp-content/uploads/2024/05/Digital-Transformation-in-CU-600x403.jpg' alt="post1" className='image' />
              <h5>A Guide to Selecting the Right Partner for Your Digital Transformation Efforts</h5>
              <p>The world has changed the way it approaches business. Digitalization is taking the driver’s seat, with most of the transactional...</p>
              <div className="guider">
                <img src="https://www.purpleslate.com/wp-content/uploads/2023/03/Website-PS1098-Sridhar-CS-DSC06579-copy-100x100.png" alt="b" />
                <p>Sridar CS <br /> May 28, 2024</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="block1">
              <img src='https://www.purpleslate.com/wp-content/uploads/2023/09/Understanding-Generative-AI-for-2024-600x403.jpg' alt="post2" className='image' />
              <h5>The Comprehensive Guide to Understanding Generative AI for 2024</h5>
              <p>The world goes through multiple cycles of innovation. The one cosmic law that governs all. Throughout anthropological history there have been..</p>
              <div className="guider">
                <img src="https://www.purpleslate.com/wp-content/uploads/2023/03/Website-PS1098-Sridhar-CS-DSC06579-copy-100x100.png" alt="b" />
                <p>Sridar CS <br /> October 3, 2023</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="block1">
              <img src='https://www.purpleslate.com/wp-content/uploads/2023/08/MicrosoftTeams-image-35-600x403.jpg' alt="post3" className='image' />
              <h5>The Guide to Digital Transformation in Credit Unions with Generative AI</h5>
              <p>Implementing Generative AI solutions in credit unions is a transformative journey that can significantly enhance member engagement...</p>
              <div className="guider">
                <img src="https://www.purpleslate.com/wp-content/uploads/2023/03/Website-PS1098-Sridhar-CS-DSC06579-copy-100x100.png" alt="b" />
                <p>Sridar CS <br /> August 31, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessConvo;
