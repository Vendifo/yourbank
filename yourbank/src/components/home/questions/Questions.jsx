import React, { useState } from 'react';
import './questions.css';
import Arrow from '../../../img/Assets/arrowdown.svg';

function Questions() {
    const [showAdditionalContent, setShowAdditionalContent] = useState(false);

    const toggleAdditionalContent = () => {
        setShowAdditionalContent(!showAdditionalContent);
    };

    return (
        <section className='questions'>
            <div className='container'>
                <div className='questions__container'>
                    <div className='questions__title'>
                        <h1><span>Frequently</span> Asked Questions</h1>
                        <p>Still have any questions? Contact our Team via support@yourbank.com</p>
                    </div>
                    <div className='questions__item-container'>
                        <div className='questions__row' >
                            <div className='questions__item' >
                                <h1>How do I open an account with YourBank?</h1>
                                <p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                            </div>
                            <div className='questions__item' >
                                <h1>What documents do I need to provide to apply for a loan?</h1>
                                <p>The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.</p>
                            </div>
                        </div>
                        <div className='questions__row' >
                            <div className='questions__item' >
                                <h1>How can I access my accounts online?</h1>
                                <p>Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.</p>
                            </div>
                            <div className='questions__item' >
                                <h1>Are my transactions and personal information secure?</h1>
                                <p>At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.</p>
                            </div>
                        </div>
                        <div className='questions__row-background'></div>
                    </div>
                    {showAdditionalContent && (
                        <div className='questions__item-container' >
                            <div className='questions__row'>
                                <div className='questions__item'>
                                    <h1>How do I apply for a credit card?</h1>
                                    <p>Applying for a credit card with YourBank is a straightforward process. You can visit our credit card section on the website and choose the card that suits your needs. Click on the "Apply Now" button, fill out the required information, and submit your application. Our team will review your application, and if approved, you'll receive your new credit card shortly.</p>
                                </div>
                                <div className='questions__item'>
                                    <h1>What benefits come with YourBank credit cards?</h1>
                                    <p>YourBank credit cards come with various benefits, including cashback rewards, travel perks, and low-interest rates. Each credit card has its unique features, so you can choose one that aligns with your spending habits and lifestyle. Explore our credit card offerings to discover the benefits associated with each card.</p>
                                </div>
                            </div>
                            <div className='questions__row'>
                                <div className='questions__item'>
                                    <h1>Is there a mobile app for YourBank?</h1>
                                    <p>Yes, YourBank offers a user-friendly mobile app that allows you to manage your accounts, transfer funds, pay bills, and more, all from the convenience of your mobile device. Simply download the YourBank app from the App Store or Google Play, log in with your credentials, and enjoy the convenience of banking on the go.</p>
                                </div>
                                <div className='questions__item'>
                                    <h1>What steps should I take if I lose my debit card?</h1>
                                    <p>If you lose your YourBank debit card, it's essential to act quickly to protect your account. Contact our customer support team immediately to report the loss, and they will guide you through the process of blocking the card and issuing a replacement. Additionally, monitor your account for any unauthorized transactions and report them promptly.</p>
                                </div>
                            </div>

                        </div>
                    )}
                    <div className='questions__button-container'>
                        <button className='questions__button' onClick={toggleAdditionalContent}>
                            Load All FAQ’s <img src={Arrow} alt="Arrow" style={{ transform: showAdditionalContent ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                        </button>


                    </div>


                </div>
            </div>
        </section>
    );
}

export default Questions;
