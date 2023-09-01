import React from 'react'
import './styles.css';
import bgback from '../images/bg-main-mobile.png';
import backcard from '../images/bg-card-back.png';
import bgcardfront from '../images/bg-card-front.png';
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Back