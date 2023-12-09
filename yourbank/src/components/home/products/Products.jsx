import React, { useState } from 'react';
import './products.css';
import briefcase from '../../../img/Assets/briefcase.fill.svg';
import saving from '../../../img/Assets/saving.svg';
import laans from '../../../img/Assets/laans.svg';

function Products() {
    const [activeTab, setActiveTab] = useState('individuals');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    return (
        <section className='products'>
            <div className='container'>
                <div className='products__subcontainer-info'>
                    <div className='products__text-container'>
                        <h1>Our <span>Products</span></h1>
                        <p>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
                    </div>
                    <div className='products__tabs'>
                        <button className={`products__button-individuals ${activeTab === 'individuals' ? 'active' : ''}`} onClick={() => handleTabChange('individuals')}>
                            For Individuals
                        </button>
                        <button className={`products__button-businesses ${activeTab === 'businesses' ? 'active' : ''}`} onClick={() => handleTabChange('businesses')}>
                            For Businesses
                        </button>
                    </div>

                </div>
                <div className='products__subcontainer-subinfo'>
                    {activeTab === 'individuals' && (
                        <div className='product__info-list'>
                            <div className='products__checking-accounts product-info'>
                                <div className='products__subcontainer-icon'><img src={briefcase} alt="briefcase" /></div>
                                <div className='products__subcontainer-text'>
                                    <h1>Everyday Checking</h1>
                                    <p>Access your funds easily and conveniently with our Everyday Checking account. Enjoy features such as online and mobile banking, debit cards, and free ATM access for your daily financial needs.</p>
                                </div>
                            </div>
                            <div className='products__savings-accounts product-info'>
                                <div className='products__subcontainer-icon'><img src={saving} alt="saving" /></div>
                                <div className='products__subcontainer-text'>
                                    <h1>Smart Savings</h1>
                                    <p>Grow your savings smartly with our Smart Savings account. Benefit from competitive interest rates and flexible savings options tailored to help you achieve your financial goals.</p>
                                </div>
                            </div>
                            <div className='products__loans-and-mortgages product-info'>
                                <div className='products__subcontainer-icon'><img src={laans} alt="loans and mortgages" /></div>
                                <div className='products__subcontainer-text'>
                                    <h1>Home Financing Solutions</h1>
                                    <p>Explore our range of home financing solutions designed to turn your homeownership dreams into reality. From mortgages to home equity loans, we're here to assist you every step of the way.</p>
                                </div>
                            </div>
                        </div>




                    )}
                    {activeTab === 'businesses' && (
                        <div className='product__info-list'>
                            <div className='products__checking-accounts product-info'>
                                <div className='products__subcontainer-icon'><img src={briefcase} alt="briefcase" /></div>
                                <div className='products__subcontainer-text'>
                                    <h1>Personal Checking</h1>
                                    <p>Enjoy easy and convenient access to your funds with our range of personal checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.</p>
                                </div>
                            </div>
                            <div className='products__savings-accounts product-info'>
                                <div className='products__subcontainer-icon'><img src={saving} alt="saving" /></div>
                                <div className='products__subcontainer-text'>
                                    <h1>High-Yield Savings</h1>
                                    <p>Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.</p>
                                </div>
                            </div>
                            <div className='products__loans-and-mortgages product-info'>
                                <div className='products__subcontainer-icon'><img src={laans} alt="loans and mortgages" /></div>
                                <div className='products__subcontainer-text'>
                                    <h1>Home Loans</h1>
                                    <p>Realize your dreams with our flexible home loan and mortgage options. From purchasing your first home to refinancing, our experienced loan officers are here to guide you through the process.</p>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </section>
    );
}

export default Products;
