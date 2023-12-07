import './empowering.css'
import arrow from '../../../img/Assets/Abstract Design.svg'
import icon from '../../../img/Assets/icon.svg'
import transactions from '../../../img/Assets/transactionsIcon.png'
import india from '../../../img/Assets/india.svg'
import usa from '../../../img/Assets/usa.svg'
import plus from '../../../img/Assets/plus.svg'
import dollar from '../../../img/Assets/dollar.svg'
import euro from '../../../img/Assets/euro.svg'
import bitcoin from '../../../img/Assets/bitcoin.svg'
import ethear from '../../../img/Assets/ethear.svg'



function Empowering () {
    return (
        <section className='section__empowering' >
            <div className='container'>
                <div className='empowering' >
                    
                    <div className='empowering__welcome'>
                        <img className='empowering__image' src={arrow} alt="Arrow" />
                        <div className='journey'>
                            <div className='journey__check' >
                                <img src={icon} alt="Icon" />
                                <span>No LLC Required, No Credit Check.</span>
                            </div>
                            <div className='journey__title' >Welcome to YourBank Empowering Your <span>Financial Journey</span></div>
                            <div className='journey__sub-title' >At YourBank, our mission is to provide comprehensive banking
                                solutions that empower individuals and businesses to achieve their
                                financial goals. We are committed to delivering personalized and innovative
                                services that prioritize our customers' needs.</div>
                        </div>
                        <button className='journey__button' >Open Account</button>
                    </div>
                    <div className='empowering__currency'>
                    <div className='monthly' >
                        <img src={plus} alt="Plus" />
                        <div>
                           <h1>+ $5000,00</h1> 
                           <p>Monthly Income</p>
                        </div>
                    </div>
                        <h1 className='empowering__currency-title' >Your Transactions</h1>
                        <div className='transactions'>
                            <ul className='transactions__list' >
                                <li className='transactions__item' >
                                    <div className='transactions__container-text'>
                                        <img src={transactions} alt="transactions" />
                                        <div className='transactions__text' >
                                            <h1 className='transactions__text-title' >Transaction</h1>
                                            <p className='transactions__text-subtext' >Joel Kenley</p>
                                        </div>
                                    </div>
                                    <span className='transactions__price' >-$68.00</span>
                                </li >
                                <li className='transactions__item lp2' >
                                    <div className='transactions__container-text'>
                                        <img src={transactions} alt="transactions" />
                                        <div className='transactions__text' >
                                            <h1 className='transactions__text-title' >Transaction</h1>
                                            <p className='transactions__text-subtext' >Mark Smith</p>
                                        </div>
                                    </div>
                                    <span className='transactions__price' >-$68.00</span>
                                </li>
                                <li className='transactions__item lp3 ' >
                                    <div className='transactions__container-text' >
                                        <img src={transactions} alt="transactions" />
                                        <div className='transactions__text' >
                                            <h1 className='transactions__text-title' >Transaction</h1>
                                            <p className='transactions__text-subtext' >Mark Smith</p>
                                        </div>
                                    </div>
                                    <span className='transactions__price' >-$68.00</span>
                                </li>
                            </ul>
                        </div>
                        <div className='empowering__exchange' >
                            <h1 className='empowering__exchange-title' >Money Exchange</h1>
                            <div className='empowering__exchange-container' >
                                <div className='empowering__exchange-subcontainer' >
                                    <div className='empowering__exchange-inr' >
                                        <div className='empowering__exchange-inr__text'  >  
                                            <img src={india} alt="india" />
                                            <span>INR</span>
                                        </div>
                                        <p>Indian Rupees</p>
                                    </div>
                                    <div className='empowering__exchange-inr' >
                                        <div className='empowering__exchange-inr__text' >
                                            <img src={usa} alt="USA" />
                                            <span>USD</span>
                                        </div>
                                        <p>United States Dollar</p>
                                    </div>
                                </div>
                                <div className='empowering__exchange-price' >
                                    <div>
                                        <p>5,0000</p>
                                    </div>
                                    <div>
                                        <p>12.00</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button className='exchange__button' >Exchange</button>
                        <div className='exchange__supported' >
                            <span>Supported Currency</span>
                            <ul>
                                <li><img src={dollar} alt="dollar" /></li>
                                <li><img src={euro} alt="euro" /></li>
                                <li><img src={bitcoin} alt="bitcoin" /></li>
                                <li><img src={ethear} alt="ethear" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Empowering;