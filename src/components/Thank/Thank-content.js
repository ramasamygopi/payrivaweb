import React from 'react'
import './Thank-content.css'

const Thankcontent = () => {
  return (
    <div className='Thank-parent'>
       <div className="Thank-header">
            <h1>Thank you for reaching out to us!</h1>
            <p>Your inquiry is important to us, and we’re grateful for the opportunity to assist you. Here’s what you can expect next</p>
       </div>

        <div className="Thank-grid">
            <div className="grid-one">
                <h1>1. Confirmation Email</h1><br />
                <p>You will receive a confirmation email shortly acknowledging that we’ve received your inquiry. Please keep an eye on your inbox, including your spam folder, just in case.</p>
            </div>
            <div className="grid-one">
                <h1>2. Our Team's Response</h1><br />
                <p>Our dedicated team is already reviewing your inquiry and will get back to you as soon as possible. We strive to respond promptly to all inquiries, typically within 24-48 hours.</p>
            </div>
            <div className="grid-one">
                <h1>3. Stay Connected</h1><br />
                <p>In the meantime, feel free to explore our website for more information about our products/services. You can also connect with us on social media to stay updated on the latest news, promotions, and insights.</p>
            </div>
        </div>
    </div>
  )
}

export default Thankcontent