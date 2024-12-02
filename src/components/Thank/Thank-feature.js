import React from 'react'
import './Thank-feature.css'

const Thankfeature = () => {
  return (
    <div className="Related-post-container">
      <h2>Featured Resources</h2>
      <div className="row gx-3 gy-3">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="block1">
            <img src='https://www.purpleslate.com/wp-content/uploads/2023/08/Top-Insurance-Org-Case-Study-Banner-768x415.jpg' alt="post1" className='image'/>
            <h5> Leading Insurance Org Brings Down Partner Onboarding to Less than 24 hours</h5>
            <p>Business Value Achieved Brought down Partner Onboarding time by less than a day Increased the number of partner onboarding by…</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="block1">
          <img src='https://www.purpleslate.com/wp-content/uploads/2024/09/Personalization-in-Insurance-768x415.jpg' alt="post2" className='image'/>
          <h5> Leveraging AI to Drive Hyper-Personalization in the Insurance Industry</h5>
          <p>Consumers today expect more than generic products and services—they demand hyper-personalization. This trend has reshaped industries, and insurance is no…</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="block1">
          <img src='https://www.purpleslate.com/wp-content/uploads/2024/05/Siva-Webinar-2-1-768x415.jpg' alt="post3" className='image'/>
          <h5> Optimize Infrastructure Service spends with Data Insights from Kea</h5>
          <p>To thrive in an increasingly competitive landscape, sales professionals and leaders must step up their data game and depend on…</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thankfeature