import PropTypes from "prop-types";
import React from 'react';
import './ServiceIcon.css';
import IconBoxData from '../../data/iconBox/icon-box.json';
import IconBox from '../../components/IconBox/IconBox.jsx';
import SectionTitle from '../../components/SectionTitles/SectionTitle';

const ServiceIconBox = ({ classOption }) => {
    return (
        <div className={`section section-padding-t90-b100 ${classOption}`}>
            <div className="service">
                <div className="service-content">
                    <h2>Our Products !</h2>
                    <h3>Low-code platform suite to <br /> accelerate your digital journey.</h3>
                    <p>Let’s not reinvent the wheel. From Virtual Assistants to Data Management to Insights, build on top of our platform accelerators to deliver business applications at scale, at speed.</p>
                </div>

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6 iconrow">
                    {IconBoxData && IconBoxData.slice(0, 3).map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up">
                                    <IconBox classOption="box-border" data={single} key={key} />
                                </div>
                            ); 
                    })}

                </div>

            </div>
        </div>
    )
}

ServiceIconBox.propTypes = {
    classOption: PropTypes.string
  };
  ServiceIconBox.defaultProps = {
    classOption: "section section-padding-t90-b100"
};

export default ServiceIconBox;
