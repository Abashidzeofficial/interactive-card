import React from 'react'
import './styles.css';
import bgback from '../images/bg-main-mobile.png';
import backcard from '../images/bg-card-back.png';
import bgcardfront from '../images/bg-card-front.png';
import thanksIcon from '../images/icon-complete.svg';
import desktopbackbg from '../images/bg-main-desktop.png';

interface Backprops {
    cardInfo: any;
    setCardInfo: any;
}
const Back: React.FC<Backprops> = ({ cardInfo, setCardInfo }) => {
    return (
        <div className="back-container">
            <div className="back-main">
                <img src={bgback} alt="bg" className="back" width="375"></img>
                <img src={desktopbackbg} alt="desktopbg" className="desktop-back-bg" />
                <div className="back-card">
                    <div className="card-back-bag">
                        <img src={backcard} alt="bgcard" className="back-bg-card" width="276" height="147"></img>
                        <span className="backcardtxt">{cardInfo == "" ? "000" : cardInfo.cvc}</span>
                    </div>
                    <div className="card-back-front">
                        <span className="cardbacknumber">{cardInfo ? cardInfo.cardNumber : '0000 0000 0000 0000'} </span>
                        <img src={bgcardfront} alt="cardfront" className="card-bg-front" width="276" height="147"></img>
                        <div className="back-card-name">
                            <span className="back-name">
                                {cardInfo ? cardInfo.showName : 'JANE APPLESEED'}
                            </span>
                            <span className="card-expire-data">
                                {cardInfo == "" ? "00/" : cardInfo.month + "/"}
                            </span>
                            <span className="card-expire-data2">
                                {cardInfo == "" ? "00" : cardInfo.years}
                            </span>

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