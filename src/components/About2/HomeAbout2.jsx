import './HomeAbout.css';
const HomeAbout2 = () => {
    return (
        <div className="about2">
            <div className="about-img">
                <img src="https://www.purpleslate.com/wp-content/uploads/2022/11/Transforming-Businesses-blc.png"/>
            </div>
            <div className="about-content">
                <h1>Business Transformations, <br />Simplified</h1>
                <p>We make it possible for our customers – driven by the power of Digital Technologies, the promise of Conversational AI, and our passion to excel.</p>
                {/* <Link>Learn More <span><i class="fa-solid fa-chevron-right"></i></span></Link> */}
                <button className='learn-more-button'>Learn More</button>
            </div>
        </div>
    )
}

export default HomeAbout2;