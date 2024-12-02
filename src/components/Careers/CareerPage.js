import React, { useState } from 'react';
import './CareerPage.css'
import Careerdata from '../../data/Career/Career.json';
 
const CareerPage = () => {
  const [showHideContent, setShowHideContent] = useState({});
  const [activeFaq, setActiveFaq] = useState({});
  const [currentTab, setCurrentTab] = useState('faq');
  const [hideHr, setHideHr] = useState({});
 
  const faqData = [
    {
      "id": 1,
      "question": "How can I reach Payriva",
      "answer": "Send an email to Payriva.com or pick a time to reach our team. We would be more than happy to assist."
    },
    {
      "id": 2,
      "question": "How many people work at Payriva?",
      "answer": "Just like any startup, we had our humble beginnings, starting with a team of two members (the co-founders) and today we are a passionate team of 100+."
    },
    // {
    //   "id": 3,
    //   "question": "What is Payriva ?",
    //   "answer": "We are a technology startup based out of Chennai, India. We are located at a quiet campus in one of the prime technology centers in Chennai. You can find us here. https://goo.gl/maps/cGJ53NHUfij8yLXR9"
    // },
    {
      "id": 4,
      "question": "Why the name Payriva?",
      "answer": "I know, you would ask this. So, it goes like this. As per the color theory, the color Purple indicates all things good and positive in life. And, as a company we at purpleslate sincerely believe in continuous learning and sticking to the basics and the same logic applies to machines, as AI goes mainstream. As many of the Indians might know, Slate, is one of the very first learning instruments we are exposed to in life. Hence the name purpleslate. I know, it sounds a bit too much. But, we seriously meant it."
    },
    {
      "id": 5,
      "question": "Tell me more about Payriva?",
      "answer": "What else can I tell you? Hmm. Let me think. The company was founded on 2nd Jan 2017 and has had an incredible growth journey since them. Almost every year we have added new team members, moved into a new, larger office space, which means we have been very much profitable as well. We really believe you can do great things, quietly."
    },
    {
      "id": 6,
      "question": "What does Payriva do?",
      "answer": "Good question. We are a bunch of geeks and we solve challenging industry problems leveraging modern day digital technologies. We specialize on Language Interfaces and Conversational AI. Not a far fetched claim; we feel (almost) any problem can be codified and we are up for it."
    }
 
  ];
 
  const handleToggle = (id) => {
    setShowHideContent((prevShowHideContent) => ({ ...prevShowHideContent, [id]: !prevShowHideContent[id] }));
    setActiveFaq((prevActiveFaq) => ({ ...prevActiveFaq, [id]: !prevActiveFaq[id] }));
    setHideHr((prevHideHr) => ({ ...prevHideHr, [id]: !prevHideHr[id] }));
   
  };
 
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };
 
  return (
    <div className='Career-sub-container'>
      <div className='head-Content'>
        <h2>How can I join Payriva?</h2>
        <p>We hire people for not who they were; but more for who they could become</p>
        <h3>FAQ</h3>
        <div className='Aboutus-Career'>
          <button className={`AboutUs ${currentTab === 'faq' ? 'active' : ''}`} onClick={() => handleTabChange('faq')}>About us</button>
          <button className={`Career ${currentTab === 'career' ? 'active' : ''}`} onClick={() => handleTabChange('career')}>Career</button>
        </div>
      </div>
      {currentTab === 'faq' && (
        faqData.map((faq) => (
          <div key={faq.id} className='reach'>
            <div className={`reach-content ${activeFaq[faq.id] ? 'active' : ''}`}>
              <p>{faq.question}</p>
              {hideHr[faq.id] ? null : <hr />}
              <div
                id={`hide-${faq.id}`}
                style={{
                  maxHeight: showHideContent[faq.id] ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.20s ease-in-out',
                }}
              >
                {faq.answer}
              </div>
            </div>
            <div className='icon-container'>
              {showHideContent[faq.id] ? (
                <div className='minus-icon' onClick={() => handleToggle(faq.id)}>
                  <i class="fa-solid fa-minus"></i>
                </div>
              ) : (
                <div className='plus-icon' onClick={() => handleToggle(faq.id)}>
                  <i class="fa-solid fa-plus"></i>
                </div>
              )}
            </div>
          </div>
        ))
      )}
      {currentTab === 'career' && (
        Careerdata.map((Career) => (
          <div key={Career.id} className='reach'>
            <div className={`reach-content ${activeFaq[Career.id] ? 'active' : ''}`}>
              <p>{Career.question}</p>
              {hideHr[Career.id] ? null : <hr />}
              <div
                id={`hide-${Career.id}`}
                style={{
                  maxHeight: showHideContent[Career.id] ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.20s ease-in-out',
                }}
              >
                {Career.answer}
              </div>
            </div>
            <div className='icon-container'>
              {showHideContent[Career.id] ? (
                <div className='minus-icon' onClick={() => handleToggle(Career.id)}>
                  <i class="fa-solid fa-minus"></i>
                </div>
              ) : (
                <div className='plus-icon' onClick={() => handleToggle(Career.id)}>
                  <i class="fa-solid fa-plus"></i>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
 
export default CareerPage;