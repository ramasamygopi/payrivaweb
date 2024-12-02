import React from 'react';
import position from '../../data/Career/OpenPosition.json';
import './OpenPosition.css';
 
const OpenPosition = () => {
  return (
    <div className='OpenPosition-Container'>
      <h2>We are always on the lookout for GREAT Talent</h2>
      <p>Anytime is a Great Time to welcome Great Talent</p>
      <p id="bold">Open Position</p>
      <div className="row gx-2 gy-3">
        {position.map((positionItem) => (
          <div className="block-container col-lg-4 col-md-6 col-sm-12" key={positionItem.id}>
            <div className="bloc">
              <h5>{positionItem.jobPosition}</h5>
              <p>Job Type:{positionItem.jobtype}</p>
              <div>
                <p id="content">{positionItem.content}</p>
                <button>Apply Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default OpenPosition;