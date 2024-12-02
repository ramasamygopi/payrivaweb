import React from 'react';
import ContactFrom from '../../components/ContactFrom/ContactFrom.jsx';
const ContactFromContainer = () => {
    return (
        <div className="contact-form-section section section-padding-t30-b100 bg-primary-blue">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-2 col-lg-8 heading">
                        <h1>Connect With Us</h1>
                        <ContactFrom />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFromContainer
