import React from 'react'
import './styles.css';
import bgfront from '../images/bg-main-mobile.png';
import bgcard from '../images/bg-card-back.png';
import cardfront from '../images/bg-card-front.png';
import desktopbg from '../images/bg-main-desktop.png';


interface frontprops {
    showName: string;
    setShowName: any;
    cardNumber: string;
    setCardNumber: any;
}


const Front: React.FC<frontprops> = ({ showName, setShowName, cardNumber, setCardNumber }) => {

    const handleChangeName = (e: any) => {
        setShowName(e.target.value);
        console.log(showName);
    }
    const handleChangeCardNumber = (e: any) => {
        setCardNumber(e.target.value);
        console.log(cardNumber);
    }
    return (
        <div className="front-container">
            <div className="front-main">
                <img src={bgfront} alt="bg" className="bg-front" width="375"></img>
                <img src={desktopbg} alt="desktopbg" className="desktop-bg" />
                <div className="front-card">
                    <div className="card-bg">
                        <img src={bgcard} alt="bgcard" className="bg-card" width="276" height="147"></img>
                        <span className="bgcardtxt">000</span>
                    </div>
                    <div className="card-front">
                        <span className="cardfrontnumber">{cardNumber == "" ? "0000 0000 0000 0000" : cardNumber} </span>
                        <img src={cardfront} alt="cardfront" className="card-fr-front" width="276" height="147"></img>
                        <div className="fr-card-name">
                            <span className="fr-name">{showName == "" ? "JANE APPLESEED" : showName}</span>
                            <span className="card-expire-data">00/00</span>
                        </div>
                    </div>
                </div>
                <div className="name-number-input">
                    <div className="name-input">
                        <span className="cardholder-name-txt">CARDHOLDER NAME</span>
                        <input type="text" className="input-name" placeholder='e.g Jane Applessed' onInput={handleChangeName} />
                    </div>
                    <div className="number-input">
                        <span className="card-name-txt">CARD NUMBER</span>
                        <input type="text" className="input-name-card" placeholder='e.g 1234 5678 9123 0000' onInput={handleChangeCardNumber} />
                    </div>
                    <div className="exp-data-number">
                        <span className="exp-data-txt">EXP.DATA (MM/YY)</span>
                        <span className="cvc-txt">CVC</span>
                        <div className="exp-data">
                            <input type="number" className="input-mm" placeholder='MM' />
                            <input type="number" className="input-yy" placeholder='YY' />
                            <input type="number" className="input-eg-number" placeholder='e.g 123' />
                        </div>
                        <button className="config">CONFIRM</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Front