// ModernTestimonialSlider.js
import React, { useState } from "react";
import "./Testimonial.css";

const ModernTestimonialSlider = () => {
  const testimonials = [
    {
      name: "Ananya",
      role: "Senior Developer",
      text: "To me personally what appealed the most in purpleslate is the learning experience.",
      image: "https://www.purpleslate.com/wp-content/uploads/2022/10/ananya-85x90-1.png",
    },
    {
      name: "Navaneet",
      role: "Senior Developer",
      text: "The exposure to new technologies is immense and a great place to work and learn.",
      image: "https://www.purpleslate.com/wp-content/uploads/2022/10/Navaneet-85x90-1.png",
    },
    {
      name: "Kumar",
      role: "Senior Developer",
      text: "Lots of opportunities to grow and a friendly work culture.",
      image: "https://www.purpleslate.com/wp-content/uploads/2022/10/PS1027-Balaji-Rajendran-85x90-1.png",
    },
    {
      name: "Priya",
      role: "Project Manager",
      text: "Great place to innovate and collaborate with a passionate team.",
      image: "https://www.purpleslate.com/wp-content/uploads/2022/10/Indhu-85x90-1.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modern-slider">
      <h2>Loved by the Best</h2>
      <p>What the bright minds have to say</p>
      <div className="slider-container">
        <div className="testimonial active">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="testimonial-image"
          />
          <h3>{testimonials[currentIndex].name}</h3>
          <p>{testimonials[currentIndex].role}</p>
          <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
        </div>
      </div>
      <div className="arrows">
        <button onClick={handlePrev} className="arrow left-arrow">
          &#8592;
        </button>
        <button onClick={handleNext} className="arrow right-arrow">
          &#8594;
        </button>
      </div>
      <div className="dots">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`dot ${currentIndex === idx ? "active-dot" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ModernTestimonialSlider;
