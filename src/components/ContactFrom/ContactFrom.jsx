import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onBlur"
    });
    
    const [showErrorDiv, setShowErrorDiv] = useState(''); // State to control error div visibility
    const navigate = useNavigate(); // Initialize the navigation hook

    const onSubmit = (data) => {
        if(data.name === "" && data.email === "" && data.subject === "" && data.message === "") {
            setShowErrorDiv("block"); // Show error div if any field is empty
        } else {

            console.log("Form submitted successfully");
            navigate("/Thank"); // Navigate to another page
        }
    }
    
    return (
        <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-n6">
                    <div className="col-md-6 col-12 mb-6">
                        <input 
                            type="text" 
                            placeholder="Your Name *" 
                            name="name"
                            {...register("name", {
                                required: "Name is required",
                            })} 
                        />
                        {errors?.name && <p>{errors.name?.message}</p>}
                    </div>
                    <div className="col-md-6 col-12 mb-6">
                        <input 
                            type="email" 
                            placeholder="Email *" 
                            name="email" 
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })} 
                        />
                        {errors?.email && <p>{errors.email?.message}</p>}
                    </div>
                    <div className="col-md-6 col-12 mb-6">
                        <input 
                            type="tel" 
                            placeholder="Your Phone Number (Optional)" 
                            name="tel"
                            {...register("tel")} // Phone number isn't required here
                        />
                        {errors?.tel && <p>{errors.tel?.message}</p>}
                    </div>
                    <div className="col-md-6 col-12 mb-6">
                        <input 
                            type="text" 
                            placeholder="Business Name *" 
                            name="b-name" 
                            {...register("b-name", {
                                required: "Business name is required",
                            })}
                        />
                        {errors?.["b-name"] && <p>{errors["b-name"]?.message}</p>}
                    </div>
                    <div className="col-12 mb-6">
                        <textarea 
                            name="message" 
                            placeholder="Message" 
                            {...register("message", {
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors?.message && <p>{errors.message?.message}</p>}
                    </div>
                    <div className="col-12 text-center mb-6">
                        <button type="submit" className="btn-btn" style={{backgroundColor:'#82469c'}}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
