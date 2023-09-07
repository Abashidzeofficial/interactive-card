import React from 'react'
import { useState } from 'react'
import './styles.css';
import bgfront from '../images/bg-main-mobile.png';
import bgcard from '../images/bg-card-back.png';
import cardfront from '../images/bg-card-front.png';
import desktopbg from '../images/bg-main-desktop.png';
import Back from './Back';


interface frontprops {
    showName: string;
    setShowName: any;
    cardNumber: string;
    setCardNumber: any;
    month: any;
    setMonth: any;
    years: string;
    setYears: any
    cvc: any;
    setCvc: any;
    monthValue: any;
    setMonthValue: any;
    showThanks: boolean;
    setShowThanks: any;
    handleFormatSubmitted: any

}




const Front: React.FC<frontprops> = ({ handleFormatSubmitted, showThanks, setShowThanks, monthValue, setMonthValue, showName, setShowName, cardNumber, setCardNumber,
    month, setMonth, years, setYears, cvc, setCvc }) => {



    const handleSubmission = () => {
        const formatData = {
            showName,
            cardNumber,
            month,
            years,
            cvc,
        }
        handleFormatSubmitted(formatData);

    }

    const handleChangeName = (e: any) => {
        const showNameValue = e.target.value;
        if (/^[A-Za-z\s]+$/.test(showNameValue)) {    // inputshi asoebs ar chaawerinebs 
            setShowName(showNameValue);
        }
    }
    const handleChangeCardNumber = (e: any) => {
        const cardNumberValue = e.target.value;
        const sanitizedValue = cardNumberValue.replace(/\D/g, ''); // ricxvebis garda sxvas arafers gamoataninebs
        let formattedValue = '';
        for (let i = 0; i < sanitizedValue.length; i += 4) {          ////mtliani funqcia awyobilia rom 4 cifrs shors gaaketos sivrce rogor baratis nomrebzea
            formattedValue += sanitizedValue.slice(i, i + 4) + ' ';
        }
        formattedValue = formattedValue.trim();
        setCardNumber(formattedValue);
    }
    const handleChangeMonth = (e: any) => {
        let monthvalue = e.target.value;
        if (/^\d{0,2}$/.test(monthvalue)) {  //  inputshi 2 cifrze mets ar chaawerinebs
            setMonth(monthvalue);
            console.log(month);
        }
    }
    const handleChangeYears = (e: any) => {
        const yearsvalue = e.target.value;
        if (/^\d{0,2}$/.test(yearsvalue)) {  //  inputshi 2 cifrze mets ar chaawerinebs
            setYears(yearsvalue);
            console.log(yearsvalue);
        }
    }
    const handleChangeCvc = (e: any) => {
        const cvcvalue = e.target.value;
        console.log(cvc);
        if (/^\d{0,3}$/.test(cvcvalue)) {   //  inputshi 3 cifrze mets ar chaawerinebs
            setCvc(cvcvalue);
        }
    }

    return (
        <div className="front-container">
            <div className="front-main">
                <img src={bgfront} alt="bg"
                    className="bg-front" width="375">
                </img>
                <img src={desktopbg} alt="desktopbg" className="desktop-bg" />
                <div className="front-card">
                    <div className="card-bg">
                        <img src={bgcard} alt="bgcard"
                            className="bg-card" width="276" height="147">
                        </img>
                        <span className="bgcardtxt">
                            {cvc == "" ? "000" : cvc}
                        </span>
                    </div>
                    <div className="card-front">
                        <span className="cardfrontnumber">
                            {cardNumber == "" ?
                                "0000 0000 0000 0000" : cardNumber}
                        </span>
                        <img src={cardfront} alt="cardfront"
                            className="card-fr-front" width="276" height="147">
                        </img>
                        <div className="fr-card-name">
                            <span className="fr-name">
                                {showName == "" ? "JANE APPLESEED" : showName}
                            </span>
                            <span className="card-expire-data">
                                {month == "" ? "00/" : month + "/"}
                            </span>
                            <span className="card-expire-data2">
                                {years == "" ? "00" : years}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="name-number-input">
                    <div className="name-input">
                        <span className="cardholder-name-txt">
                            CARDHOLDER NAME
                        </span>
                        <input type="text"
                            className="input-name"
                            placeholder='e.g Jane Applessed'
                            onChange={(e) => {
                                const nameValue = e.target.value;
                                if (/^[A-Za-z\s]+$/.test(nameValue)) {
                                    setShowName(nameValue);
                                }
                            }}
                        />
                    </div>
                    <div className="number-input">
                        <span className="card-name-txt">CARD NUMBER</span>
                        <input type="text"
                            className="input-name-card"
                            placeholder='e.g 1234 5678 9123 0000'
                            onInput={handleChangeCardNumber}
                            maxLength={19}
                            value={cardNumber}
                        />
                    </div>
                    <div className="exp-data-number">
                        <span className="exp-data-txt">
                            EXP.DATA (MM/YY)
                        </span>
                        <span className="cvc-txt">CVC</span>
                        <div className="exp-data">
                            <input type="text"
                                className="input-mm"
                                placeholder='MM'
                                onInput={handleChangeMonth}
                                maxLength={2}
                                value={month}
                            />
                            <input type="text"
                                className="input-yy"
                                placeholder='YY'
                                onInput={handleChangeYears}
                                maxLength={2}
                                value={years}
                            />
                            <input type="text"
                                className="input-eg-number"
                                placeholder='e.g 123'
                                onInput={handleChangeCvc}
                                maxLength={3}
                                value={cvc}
                            />
                        </div>
                        <button
                            className="config"
                            type="submit"
                            onClick={handleSubmission}
                        >
                            CONFIRM
                        </button>

                    </div>

                </div>

            </div>
        </div>

    )

}

export default Front
