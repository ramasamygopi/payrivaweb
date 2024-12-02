import React from 'react';
import '../../assets/scss/Service/BusinessConversation.css';

const BusinessConversational=()=>{
    return(
        <>
        <div className='BusinessConversational-container'>
            <h3>Connect with us to future-proof your digital transformation efforts with the promise of speed to value!</h3>
        
           <div className='pandbutton-container'>
            <p> Get in Touch with our Experts</p>
            <button><i class="fas fa-arrow-right"></i> </button>
           </div> 
        </div>

        {/* Relatedposts */}

        <div className="Related-post-container">
      <h2>Related Posts</h2>
      <div className="row gx-3 gy-3">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="block1">
            <img src='https://www.purpleslate.com/wp-content/uploads/2024/05/Digital-Transformation-in-CU-600x403.jpg' alt="post1" className='image'/>
            <h5>The Guide to Digital Transformation in Credit Unions with Generative AI</h5>
            <p>Implementing Generative AI solutions in credit unions is a transformative journey that can significantly enhance member engagement, operational efficiency, and…</p>
          <div className="guider">
            <img src="https://www.purpleslate.com/wp-content/uploads/2023/03/Website-PS1098-Sridhar-CS-DSC06579-copy-100x100.png" alt="b"/>
            <p>Sridar CS <br/> May 28,2024</p>
          </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="block1">
          <img src='https://www.purpleslate.com/wp-content/uploads/2023/09/Understanding-Generative-AI-for-2024-600x403.jpg' alt="post2" className='image'/>
          <h5>he Comprehensive Guide to Understanding Generative AI for 2024</h5>
          <p>The world goes through multiple cycles of innovation. The one cosmic law that governs all. Throughout anthropological history there have…</p>
          <div className="guider">
            <img src="https://www.purpleslate.com/wp-content/uploads/2023/03/Website-PS1098-Sridhar-CS-DSC06579-copy-100x100.png" alt="b"/>
            <p>Sridar CS <br/> Octobor 3,2023</p>
          </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="block1">
          <img src='https://www.purpleslate.com/wp-content/uploads/2023/04/MicrosoftTeams-image-21-600x403.jpg' alt="post3" className='image'/>
          <h5>Ultimate Guide to Enhancing Customer Experiences with Conversational Commerce</h5>
          <p>With 1.4 billion people regularly using AI Assistants worldwide, Conversational commerce is a growing trend transforming how businesses and customers…</p>
          <div className="guider">
            <img src="https://www.purpleslate.com/wp-content/uploads/2023/03/Website-PS1098-Sridhar-CS-DSC06579-copy-100x100.png" alt="b"/>
            <p>Sridar CS <br/> August 31,2023</p>
          </div>
          </div>
        </div>
      </div>
      </div>



        
        
        </>
    )
}
export default BusinessConversational;