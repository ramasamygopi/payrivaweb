import React from 'react';
import PostTwo from '../../data/Events/PostTwoNavigate.json';
import './PastEvents.css';
import { useNavigate } from 'react-router-dom';
 
const PostTwoNavigate = () => {
  const navigate = useNavigate();
 
  const handleButtonClick = (buttonClass) => {
    if (buttonClass === 'one'|| 'previous') {
      navigate('/events');
    }
  };
 
  return (
    <>
    <div className="PastEvents-Container">
      <h2>Past Events & webinar</h2>
      <div className="row gx-3 gy-3">
        {PostTwo.map((post) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={post.id}>
            <div className="block1">
              <img src={post.image} alt={post.title} className="image" />
              <p id="color">{post.Events}</p>
              <h5>{post.title}</h5>
              <p>{post.description}</p>
              <div className="guider">
                <img src={post.author.image} alt={post.author.name} />
                <p>{post.author.name} <br /> {post.author.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
 
    <div className="pre-next-btn-container">
    <div className="Previous" onClick={() => handleButtonClick('Previous')}>
        Previous
      </div>
      <div className="Oneo" onClick={() => handleButtonClick('One')}>
        1
      </div>
      <div className="Twoo" onClick={() => handleButtonClick('Two')}>
        2
      </div>
     
    </div>
    </>
  );
};
 
export default PostTwoNavigate;