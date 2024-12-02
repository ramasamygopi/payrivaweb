import React from 'react';
import './EventsAbout.css';
const EventsAbout=()=>{
    return(
        <>
        <div className='Events-about-container'>
           <div className='Events-about-left'>
              <h1>Events</h1>
              <p>On-Demand Webinars On How Conversational AI Is Changing The World Forever.</p>
           </div>
           <div className='Events-about-right'>
          <img src="https://www.purpleslate.com/wp-content/uploads/2023/01/events.png" alt="Eventsimg"/>
            </div>
        </div>
{/* webinar section */}
        <div className='webinar-conatiner'>
            <div className="webinar-left-container">
               <img src='https://www.purpleslate.com/wp-content/uploads/2024/07/CX-Megatrends-Webinar.jpg' alt="webinarimg"/>
            </div>
            <div className='webinar-right-container'>
                <h3>Featured Webinar</h3>
                <h2>CX Megatrends: The Innovative Impact of Generative AI in Customer Service</h2>
                <button>Watch Recap <i class="fas fa-arrow-right"></i> </button>
 
            </div>
        </div>
        </>
    )
}
export default EventsAbout;