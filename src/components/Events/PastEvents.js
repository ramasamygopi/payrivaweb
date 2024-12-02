import React from 'react';
import PastEventData from '../../data/Events/PastEvents.json';
import { useNavigate } from 'react-router-dom';
import './PastEvents.css';
 
const PastEvents = () => {
    const navigate = useNavigate();
    const handleButtonClick = (buttonClass) => {
        if (buttonClass === 'Two'||'Three') {
          navigate('/posttwo');
        }
      };
 
  return (
    <>
    <div className='PastEvents-Container'>
      <h2>Past Events & webinar</h2>
      <div className="row gx-3 gy-3">
        {PastEventData.map((post) => (
          <div className="col-lg-4 col-md-6 col-sm-10" key={post.id}>
            <div className="block1">
              <img src={post.image} alt={post.title} className='image'/>
              <p id="color">{post.Events}</p>
              <h5>{post.title}</h5>
              <p>{post.description}</p>
              <div className="guider">
                <img src={post.author.image} alt={post.author.name}/>
                <p>{post.author.name} <br/> {post.author.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 
 
{/* next */}
 
<div className='pre-next-btn-container'>
 
    <div className='One' onClick={() => handleButtonClick('One')}>
        1
    </div>
    <div className='Two' onClick={() => handleButtonClick('Two')}>
     2
    </div>
 
    <div className='Three' onClick={() => handleButtonClick('Three')}>
   Next
    </div>
</div>
</>
  );
};
 
export default PastEvents;