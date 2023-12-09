import React, { useState } from 'react';
import './features.css';
import featuresArrow from '../../../img/Assets/featuresArrow.svg';

function Features() {
  const [selectedFeature, setSelectedFeature] = useState('Online banking');

  const handleButtonClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <section className='features'>
      <div className='container'>
        <div className='features__title'>
          <h1>
            Our <span>Features</span>
          </h1>
          <p>
            Experience a host of powerful features at YourBank, including seamless online banking, secure transactions,
            and personalized financial insights, all designed to enhance your banking experience
          </p>
        </div>
        <div className='features__container'>
          <div className='features__menu'>
            <button onClick={() => handleButtonClick('Online Banking')} className={selectedFeature === 'Online Banking' ? 'active' : ''}>
              Online Banking
            </button>
            <button onClick={() => handleButtonClick('Financial Tools')} className={selectedFeature === 'Financial Tools' ? 'active' : ''}>
              Financial Tools
            </button>
            <button onClick={() => handleButtonClick('Customer Support')} className={selectedFeature === 'Customer Support' ? 'active' : ''}>
              Customer Support
            </button>
          </div>
          <div className='features__content'>
            {/* Conditional rendering based on selectedFeature */}
            {selectedFeature === 'Online Banking' && (
              <div className='features__content'>
              <div className='features__content-cards'>
                <div className='features__content-card'>
                  <div>
                    <h1>24/7 Account Access</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking
                    platform. Check balances, transfer funds, and pay bills with ease.
                  </span>
                </div>
                <div className='features__content-card'>
                  <div>
                    <h1>Mobile Banking App</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage
                    your accounts, deposit checks, and make payments from your smartphone or tablet.
                  </span>
                </div>
              </div>
              <div className='features__content-cards'>
                <div className='features__content-card'>
                  <div>
                    <h1>Secure Transactions</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Rest assured knowing that your transactions are protected by industry-leading security measures. We employ
                    encryption and multi-factor authentication to safeguard your financial information.
                  </span>
                </div>
                <div className='features__content-card'>
                  <div>
                    <h1>Bill Pay and Transfers</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make
                    one-time transfers between your accounts with just a few clicks.
                  </span>
                </div>
              </div>
            </div>
            
              
            )}
            {selectedFeature === 'Financial Tools' && (
              <div className='features__content'>
              <div className='features__content-cards'>
                <div className='features__content-card'>
                  <div>
                    <h1>Financial Planning</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Achieve your financial goals with our comprehensive financial planning tools. Plan for your future,
                    track your expenses, and make informed decisions about your investments.
                  </span>
                </div>
                <div className='features__content-card'>
                  <div>
                    <h1>Budgeting Made Easy</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Take control of your finances with our easy-to-use budgeting tools. Set budgets, track your spending,
                    and receive personalized insights to help you manage your money effectively.
                  </span>
                </div>
              </div>
              <div className='features__content-cards'>
                <div className='features__content-card'>
                  <div>
                    <h1>Investment Insights</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Stay informed about market trends and make smart investment decisions with our investment insights.
                    Access real-time data, research potential opportunities, and optimize your investment portfolio.
                  </span>
                </div>
                <div className='features__content-card'>
                  <div>
                    <h1>Expense Tracking</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Simplify your financial life by tracking your expenses effortlessly. Categorize your spending, set saving
                    goals, and receive notifications to stay on top of your budget.
                  </span>
                </div>
              </div>
            </div>
            
            )}
            {selectedFeature === 'Customer Support' && (
              <div className='features__content'>
              <div className='features__content-cards'>
                <div className='features__content-card'>
                  <div>
                    <h1>Dedicated Support Team</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues you may
                    encounter. Get personalized assistance and timely solutions to ensure a seamless banking experience.
                  </span>
                </div>
                <div className='features__content-card'>
                  <div>
                    <h1>Live Chat Assistance</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Connect with our support team in real-time through our live chat feature. Receive instant help, ask questions,
                    and get the support you need without leaving the comfort of your home.
                  </span>
                </div>
              </div>
              <div className='features__content-cards'>
                <div className='features__content-card'>
                  <div>
                    <h1>Knowledge Base</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Explore our extensive knowledge base to find answers to common questions and learn more about our banking
                    products and services. Access helpful articles and tutorials at your convenience.
                  </span>
                </div>
                <div className='features__content-card'>
                  <div>
                    <h1>Phone Support</h1>
                    <img src={featuresArrow} alt='featuresArrow' />
                  </div>
                  <span>
                    Need to speak with a support representative? Contact our phone support line for direct assistance. Our
                    knowledgeable team is ready to help you over the phone.
                  </span>
                </div>
              </div>
            </div>
            
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
