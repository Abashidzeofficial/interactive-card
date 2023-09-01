import React from 'react'
import './styles.css';
import bgback from '../images/bg-main-mobile.png';
import backcard from '../images/bg-card-back.png';
import bgcardfront from '../images/bg-card-front.png';
import thanksIcon from '../images/icon-complete.svg';
function Back() {
    return (
        <div className="back-container">
            <div className="back-main">
                <img src={bgback} alt="bg" className="back" width="375"></img>
                <div className="back-card">
                    <div className="card-bg">
                        <img src={backcard} alt="bgcard" className="bg-card" width="276" height="147"></img>
                        <span className="backcardtxt">000</span>
                    </div>
                    <div className="card-front">
                        <span className="cardbacknumber">0000 0000 0000 0000 </span>
                        <img src={bgcardfront} alt="cardfront" className="card-fr-front" width="276" height="147"></img>
                        <div className="back-card-name">
                            <span className="back-name">JANE APPLESEED</span>
                            <span className="card-expire-data-bg">00/00</span>
                        </div>
                        <div className="thanks-main">
                            <div className="thanks">
                                <img src={thanksIcon} alt="thanksIcon" className="thx-icon"></img>
                                <span className="thanks-txt">THANKS YOU</span>
                                <span className="tnx-second-txt">We’ve added your card details</span>
                                <button className="Continue">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Back