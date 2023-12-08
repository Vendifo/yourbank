import './features.css'
import featuresArrow from '../../../img/Assets/featuresArrow.svg'

function Features() {
    return (
        <section className='features'>
            <div className='container'>
                <div className='features__title' >
                    <h1>Our <span>Features</span></h1>
                    <p>Experience a host of powerful features at YourBank,
                         including seamless online banking, secure transactions,
                          and personalized financial insights, all designed to enhance
                           your banking experience</p>
                </div>
                <div className='features__container' >
                    <div className='features__menu' >
                        <button>Online Banking</button>
                        <button>Financial Tools</button>
                        <button>Customer Support</button>
                    </div>
                    <div className='features__content' >
                        <div className='features__content-cards' >
                            <div className='features__content-card' >
                                <div>
                                    <h1>24/7 Account Access</h1>
                                    <img src={featuresArrow} alt="featuresArrow" />
                                </div>
                                <span>Enjoy the convenience of accessing your accounts anytime,
                                     anywhere through our secure online banking platform. Chec
                                     k balances, transfer funds, and pay bills with ease.</span>
                            </div>
                            <div className='features__content-card' >
                                <div>
                                    <h1>Mobile Banking App</h1>
                                    <img src={featuresArrow} alt="featuresArrow" />
                                </div>
                                <span>Stay connected to your finances on the go with our user-friendly
                                     mobile banking app. Easily manage your accounts, deposit checks,
                                      and make payments from your smartphone or tablet.</span>
                            </div>
                        </div>
                        <div className='features__content-cards' >
                            <div className='features__content-card' >
                                <div>
                                    <h1>Secure Transactions</h1>
                                    <img src={featuresArrow} alt="featuresArrow" />
                                </div>
                                <span>Rest assured knowing that your transactions are protected by
                                     industry-leading security measures. We employ encryption and
                                      multi-factor authentication to safeguard your financial information.</span>
                            </div>
                            <div className='features__content-card' >
                                <div>
                                    <h1>Bill Pay and Transfers</h1>
                                    <img src={featuresArrow} alt="featuresArrow" />
                                </div>
                                <span>Save time and avoid late fees with our convenient bill pay service.
                                     Set up recurring payments or make one-time transfers between your
                                      accounts with just a few clicks.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features