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
    month: string;
    setMonth: any;
    years: string;
    setYears: any
    cvc: string;
    setCvc: any;
}


const Front: React.FC<frontprops> = ({ showName, setShowName, cardNumber, setCardNumber,
    month, setMonth, years, setYears, cvc, setCvc }) => {

    const handleChangeName = (e: any) => {
        setShowName(e.target.value);
        console.log(showName);
    }
    const handleChangeCardNumber = (e: any) => {
        setCardNumber(e.target.value);
        console.log(cardNumber);
    }
    const handleChangeMonth = (e: any) => {
        setMonth(e.target.value);
        console.log(month);
    }
    const handleChangeYears = (e: any) => {
        setYears(e.target.value);
        console.log(years);
    }
    const handleChangeCvc = (e: any) => {
        setCvc(e.target.value);
        console.log(cvc);
    }
    return (
        <div className="front-container">
            <div className="front-main">
                <img src={bgfront} alt="bg" className="bg-front" width="375"></img>
                <img src={desktopbg} alt="desktopbg" className="desktop-bg" />
                <div className="front-card">
                    <div className="card-bg">
                        <img src={bgcard} alt="bgcard"
                            className="bg-card" width="276" height="147"></img>
                        <span className="bgcardtxt">{cvc == "" ? "000" : cvc}</span>
                    </div>
                    <div className="card-front">
                        <span className="cardfrontnumber">
                            {cardNumber == "" || /[a-z]/gi.test(cardNumber) == true ?
                                "0000 0000 0000 0000" : cardNumber} </span>
                        <img src={cardfront} alt="cardfront"
                            className="card-fr-front" width="276" height="147"></img>
                        <div className="fr-card-name">
                            <span className="fr-name">{showName == "" ? "JANE APPLESEED" : showName}</span>
                            <span className="card-expire-data">{month == "" ? "00/" : month + "/"}</span>
                            <span className="card-expire-data2">{years == "" ? "00" : years}</span>
                        </div>
                    </div>
                </div>
                <div className="name-number-input">
                    <div className="name-input">
                        <span className="cardholder-name-txt">CARDHOLDER NAME</span>
                        <input type="text" className="input-name"
                            placeholder='e.g Jane Applessed'
                            onInput={handleChangeName}
                        />
                    </div>
                    <div className="number-input">
                        <span className="card-name-txt">CARD NUMBER</span>
                        <input type="text" className="input-name-card"
                            placeholder='e.g 1234 5678 9123 0000'
                            onInput={handleChangeCardNumber}
                        />
                    </div>
                    <div className="exp-data-number">
                        <span className="exp-data-txt">EXP.DATA (MM/YY)</span>
                        <span className="cvc-txt">CVC</span>
                        <div className="exp-data">
                            <input type="number" className="input-mm"
                                placeholder='MM' onInput={handleChangeMonth}
                            />
                            <input type="number" className="input-yy"
                                placeholder='YY' onInput={handleChangeYears}
                            />
                            <input type="number" className="input-eg-number"
                                placeholder='e.g 123' onInput={handleChangeCvc}
                            />
                        </div>
                        <button className="config">CONFIRM</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Front
//|| /[a-z]/gi.test(cardNumber)  es kodi inputshi ar chaawerinebs asoebs