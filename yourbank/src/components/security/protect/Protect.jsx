import './protect.css'
import secure from '../../../img/Assets/secure.svg'
import multi from '../../../img/Assets/multi.svg'
import flaud from '../../../img/Assets/flaud.svg'
import mobile from '../../../img/Assets/mobile.svg'

function Protect () {
    return (
        <section className='protect' >
            <div className='container' >
                <div className='benefits__container' >
                    <div className='benefits__text-container'>
                        <h1>How We <span>Protect You</span></h1>
                        <p>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
                    </div>
                    <div className='benefits__info-container'>
                        <div className='benefits__info-row' >
                            <div className='benefits__info-item'>
                                <div className='benifits__info-item-title' >
                                    <div><img src={secure} alt="secure" /></div>
                                    <h1>Secure Online Banking Platform</h1>
                                </div>
                                <p>Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.</p>
                            </div>
                            <div className='benefits__info-item'>
                                <div className='benifits__info-item-title' >
                                    <div><img src={multi} alt="multi" /></div>
                                    <h1>Multi-Factor Authentication</h1>
                                </div>
                                <p>To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.</p>
                            </div>
                        </div>
                        
                        <div className='benefits__info-row' >
                            <div className='benefits__info-item'>
                                <div className='benifits__info-item-title' >
                                    <div><img src={flaud} alt="flaud" /></div>
                                    <h1>Fraud Monitoring</h1>
                                </div>
                                <p>We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.</p>
                            </div>
                            <div className='benefits__info-item'>
                                <div className='benifits__info-item-title' >
                                    <div><img src={mobile} alt="mobile" /></div>
                                    <h1>Secure Mobile Banking</h1>
                                </div>
                                <p>Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Protect