import React from 'react';
import '../../assets/scss/elements/cta.css';
const CallToActionTwo = () => {
    return (
        <div className="Moreon-parent">
            <div className="Moreon">
                <div className="moreon-head">
                    <h1>More on what <br /> Payriva does</h1>
                </div>
                <div className="moreon-content">
                    <p>We are fascinated by technology and using technology to solve tough problems. We focus primarily on leveraging the modern digital technologies to build products and solutions for the modern age. All our work falls under two major themes – Digital Solutions and Conversational AI.</p>
                </div>
            </div> 
            <div className="Moreon-down">
                <div className="digital">
                    <h1>Digital Solutions</h1>
                    <p>We would like to call it ‘no nonsense’ digital services. Our approach to modern software engineering starts right from how we source and curate our talent. <br />A highly self-driven team of engineers with a solution-first approach, craft high-outcome applications for our customers. No wonder our customers keep coming back to us for more of what they get.</p>
                </div>
                <div className="convoai">
                    <h1>Conversation AI</h1>
                    <p>‘How would humans interact with computers?’ has been a key question in the evolution of computers. From machine instructions to green terminals, graphical user interfaces, touch screens, we used creative interfaces. But, there is a more humane way to interact with machines – Language. <br />We believe that good information software reflects how humans interact with each other and it is only an inevitable natural progression that the various services using computing devices would use language as the primary interface in a conversational setting. We deliver Conversational AI in both Voice and Text, for our customers using our lowcode framework, platform and products</p>
                </div>
            </div>
        </div>
             
    )
}

export default CallToActionTwo;