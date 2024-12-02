import '../../assets/scss/DriveUs/driveus.css';

const DriveUs = () => {
    return (
        <div className='drive-parent'>
            <h1>What drives us ?</h1>
            <div className="drive-content">
                <div className="inno">
                    <div className="inno-img">
                        <img src="https://www.purpleslate.com/wp-content/uploads/2023/01/purpleslate-home-icn-v2-03-01.svg" alt="hi" />
                    </div>
                    <div className="inno-content">
                        <h1>Innovation</h1>
                        <p>We believe humans would soon be able to have Smart Conversations with machines in the Language they speak to get things done</p>
                    </div>
                </div>
                <div className="pass">
                    <div className="pass-img">
                        <img src="https://www.purpleslate.com/wp-content/uploads/2023/01/passion-1-02.svg" alt="hi" />
                    </div>
                    <div className="pass-content">
                        <h1>Passion</h1>
                        <p>We take pride in delighting our customers with our Simple approach to get things done in delivering Best in Class Products & Solutions that both of us can be proud of</p>
                    </div>
                </div>
                <div className="belief">
                    <div className="belief-img">
                        <img src="https://www.purpleslate.com/wp-content/uploads/2023/01/brief-03.svg" alt="hi" />
                    </div>
                    <div className="belief-content">
                        <h1>Belief</h1>
                        <p>We believe, we can get amazing things done, with the Happiest of team members and run a highly Successful business, Quietly, without losing sleep and health</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DriveUs;
