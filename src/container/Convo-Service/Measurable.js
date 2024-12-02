import React, { useState, useEffect, useRef } from 'react';
import './Measurable.css';

const measurableData = [
  {
    title: 40,
    description: "Productivity Gains",
    subTitle: "To the caregivers with our real-time Smart Transcription solution to a leading Pet Care provider",
    className: "block"
  },
  {
    title: 47,
    description: "Increase In Lead Generation",
    subTitle: "With our Conversational AI solutions for a leading health insurance provider.",
    className: "block"
  },
  {
    title: 2,
    description: "Weeks To Beta",
    subTitle: "For any of your omnichannel Conversational AI solution built on top of our platform components.",
    className: "block"
  },
  {
    title: 95,
    description: "Accuracy",
    subTitle: "A proven solution to achieve very high levels of Speech to Text accuracy, even with complex domain-specific vocabulary in healthcare.",
    className: "block"
  }
];

const thoughtLibraryData = [
  {
    title: "Conversational App",
    subTitle: "Make your Conversational App stand out with our Design Approach.",
    buttonText: "learn more",
    className: "block2"
  },
  {
    title: "Conversational AI",
    subTitle: "Differences between Conversational AI and Generative AI",
    buttonText: "learn more",
    className: "block2"
  }
];

const Measurable = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0]);
  const measurableRef = useRef(null);

  // Function to animate numbers once the section is in view
  const animateNumbers = (start, end, index, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const newNumber = Math.floor(progress * (end - start) + start);
      setAnimatedNumbers((prev) => {
        const updated = [...prev];
        updated[index] = newNumber;
        return updated;
      });
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = measurableRef.current;
      const { top } = section.getBoundingClientRect();
      if (top < window.innerHeight && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      measurableData.forEach((item, index) => {
        animateNumbers(1, item.title, index, 2000);
      });
    }
  }, [isVisible]);

  return (
    <div className="measurable-container" ref={measurableRef}>
      <div className='measurable-highlights'>
        <div className="measurable-highlights-contents">
          <h2>Measurable Impact Made So Far</h2>
          <p>Across multiple sectors, our Conversational AI services have led to proven bottom-line impact. Let’s replicate the same in your business ops.</p>
        </div>
        <div className="measurable-highlights-btn">
          <button>Talk to us</button>
        </div>
      </div>

      <div className="row gx-3 gy-3">
        {measurableData.map((item, index) => (
          <div key={index} className={`col-lg-3 col-md-6 col-sm-12`}>
            <div className={item.className}>
              <h2>{animatedNumbers[index]}%</h2>
              <p id="bold">{item.description}</p>
              <p>{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Our Thought Library */}
      <div className='library-container-head '>
        <h2>Our Thought Library </h2>
      </div>

      <div className="row gx-3 gy-3 ">  
        {thoughtLibraryData.map((item, index) => (
          <div key={index} className={`col-lg-6 col-md-6 col-sm-12`}>
            <div className={item.className}>
              <p>{item.title}</p>
              <h5>{item.subTitle}</h5>
              <button>{item.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Measurable;
