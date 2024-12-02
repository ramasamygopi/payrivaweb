import React from 'react';
import '../../assets/scss/Service/Industries.css';
const Industries = () => {
    return (
        <div className="industries">
            <h1>Industries We Work with</h1>
            <div className="officials">
                <div className="off-one">
                    <img src="https://www.purpleslate.com/wp-content/uploads/2022/12/Hr-V3-33.jpg" alt="" />
                    <h1 id="link">HR</h1>
                    <p>Acquisition and retention of the right talent and smarter collaboration of distributed workforce – we’re transforming it all with solutions and digitized HR processes.</p>
                </div>
                <div className="off-one">
                    <img src="https://www.purpleslate.com/wp-content/uploads/2022/12/Pet-care-v3-33.jpg" alt="" />
                    <h1 id="link">Pet Care</h1>
                    <p>We’re building intelligent solutions for different applications across the pet care industry – from healthcare dashboards to pet training to eCommerce applications.</p>
                </div>
                <div className="off-one">
                    <img src="https://www.purpleslate.com/wp-content/uploads/2022/12/Engineering-v3-33.jpg" alt="" />
                    <h1 id="link">Engineering</h1>
                    <p>Engineering digital solutions for engineering firms across diverse applications – mobile, RFID, prototyping of new technology equipment, etc.</p>
                </div>
            </div>
        </div>
    )
}
export default Industries;