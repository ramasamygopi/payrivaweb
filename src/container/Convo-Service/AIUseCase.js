import React, { useState } from 'react';
import './AIUseCase.css';
 
const data = [
  {
    id: 'Voice Interfaces',
    image: 'https://www.purpleslate.com/wp-content/uploads/2023/03/voice-interface_1.png',
    content: (
      <>
        <h4>Voice Interface</h4>
        <p>Voice search and voice-based navigation are growing exponentially across demographic. Gartner predicts 30% of online searches will be made on devices without a screen.</p>
        <p>Our voice interfaces are a sure shot way to meet the new customer demand.</p>
        <ul>
          <li>They ease business operations with a hands-free approach</li>
          <li>They employ the most intuitive of interfaces – language</li>
          <li>They help achieve superior productivity gains and increase market share</li>
          <li>Their accuracy rates are as high as 95% with solutions from Microsoft, Google, etc.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'Smart Transcription',
    image: 'https://www.purpleslate.com/wp-content/uploads/2023/03/smart_transcription_1.png',
    content: (
      <>
        <h4>Smart Transcription</h4>
        <p>Smart transcription helps solve two major design problems – Recognition (converting speech to text) and Understanding (ability to understand the context).</p>
         <p>Our smart transcription services deal with improving the understanding aspect and achieving better accuracy.</p>
     <ul>
        <li>They automate transactional tasks such as data entry</li>
        <li>They promote the real-time recording of findings</li>
        <li>They identify domain specific vocabulary with higher accuracy</li>
        <li>Their language understanding model improves on regular intervals</li>
     </ul>
     
      </>
    ),
  },
  {
    id: 'Workflow automation',
    image: 'https://www.purpleslate.com/wp-content/uploads/2023/03/workflow_automation_1.png',
    content: (
      <>
        <h4>Workflow automation</h4>
        <p>In the modern enterprise world, collaboration is key and a Conversational AI (CAI) assistant can help automate some tasks by being part of that.</p>
        <p>This could vary from simple reminders to integrating with enterprise workflow engines and core applications.</p>
        <ul>
            <li>They can be made available as part of the enterprise collaboration platform</li>
            <li>CAI can facilitate multiple task-specific agents to complete the workflow</li>
            <li>Entire approval process or moving from one stage to another can be done with CAI</li>
        </ul>
 
      </>
    ),
  },
  {
    id: 'Conversational Insights',
    image: 'https://www.purpleslate.com/wp-content/uploads/2023/01/Conversational-Insights-.png',
    content: (
      <>
        <h4>Conversational Insights</h4>
        <p>Gartner states by 2025, context-driven analytics and AI models will replace 60% of existing models built on traditional data.</p>
        <p>Conversational Insights lets users Ask Questions on Data, in natural language using both Voice and Text to bring answers and insights out of their dataset.</p>
        <ul>
            <li>They provide access to momentary insights instead of overloading information</li>
            <li>They ensure users need not sift through cluttered dashboards and multiple reports for insights</li>
            <li>They improve business decision-making by reducing time to insights</li>
            <li>They democratize data access by removing the pre-existing technical barrier</li>
        </ul>
      </>
    ),
  },
  {
    id: 'Smart Speakers',
    image: 'https://www.purpleslate.com/wp-content/uploads/2023/01/smart-speakers.png',
    content: (
      <>
        <h4>Smart Speakers</h4>
        <p>Your Alexa and Google Home devices can do much more than answer Weather or Sports scores.</p>
        <p>Take your services on the smart speaker ecosystem, especially for the digital native millennials.</p>
        <ul>
            <li>Get answers to a variety of questions – from location information to product recommendations</li>
            <li>In-depth explanations regarding the products and services offered</li>
            <li>Entire purchasing journey can be built using Alexa</li>
            <li>CAI can nudge customers on tasks to be completed for better product and service usage</li>
        </ul>
      </>
    ),
  },
];
 
const AIUseCase = () => {
  const [selectedButton, setSelectedButton] = useState('Voice Interfaces');
 
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
 
  const getContent = () => {
    const selectedItem = data.find((item) => item.id === selectedButton);
    return selectedItem ? selectedItem.content : null;
  };
 
  const getImage = () => {
    const selectedItem = data.find((item) => item.id === selectedButton);
    return selectedItem ? selectedItem.image : null;
  };
 
  return (
    <>
      <div className="use-case-container">
        <div className="use-case-heading">
          <h2>Conversational AI Use Cases</h2>
          <p>Some Instances Of The Best Implementations Of Conversational AI</p>
        </div>
        <div className="btn-container">
          {data.map((item) => (
            <button key={item.id} onClick={() => handleButtonClick(item.id)}>
              {item.id}
            </button>
          ))}
        </div>
        <div className="btn-content-container">
          <div className="btn-img-container">
            <img src={getImage()} alt={selectedButton} />
          </div>
          <div className="btn-img-content-container">
            {getContent()}
          </div>
        </div>
      </div>
    </>
  );
};
 
export default AIUseCase;