import React from 'react'
import './styles.css';
import bgfront from '../images/bg-main-mobile.png';
import bgcard from '../images/bg-card-back.png';
import cardfront from '../images/bg-card-front.png';



function Front() {
    return (
        <div className="front-container">
            <div className="front-main">
                <img src={bgfront} alt="bg" className="bg-front" width="375"></img>
                <div className="front-card">
                    <div className="card-bg">
                        <img src={bgcard} alt="bgcard" className="bg-card" width="276" height="147"></img>
                        <span className="bgcardtxt">000</span>
                    </div>
                    <div className="card-front">
                        <span className="cardfrontnumber">0000 0000 0000 0000 </span>
                        <img src={cardfront} alt="cardfront" className="card-fr-front" width="276" height="147"></img>
                        <div className="fr-card-name">
                            <span className="fr-name">JANE APPLESEED</span>
                            <span className="card-expire-data">00/00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Front