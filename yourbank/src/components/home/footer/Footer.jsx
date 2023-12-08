import './footer.css'
import logo from '../../../img/Assets/shape-30.svg'
import email from '../../../img/Assets/emal.svg'
import phone from '../../../img/Assets/phone.svg'
import geo from '../../../img/Assets/geo.svg'
import facebook from '../../../img/Assets/facebook.svg'
import twitter from '../../../img/Assets/twitter.svg'
import instagram from '../../../img/Assets/instagram.svg'
import yourbank from '../../../img/Assets/YourBanK.svg'


import { Link, useLocation } from 'react-router-dom';
function Footer() {
    return (
        <footer className='footer'>
            <div className='container' >
                <div className='footer__logo'>
                    <div className='logo'>
                        <img src={logo} alt="Logo" />
                        <img src={yourbank} alt="yourbank" />
                    </div>
                    <ul className='footer__button-container'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/security" >Security</Link></li>
                    </ul>
                </div>
                <div className='footer__line' ></div>
                <div className='footer__contacts' >
                    <button>
                        <img src={email} alt="email" />
                        <span>hello@skillbirdge.com</span>
                    </button>
                    <button>
                        <img src={phone} alt="phone" />
                        <span>+91 91813 23 2309</span>
                    </button>
                    <button>
                        <img src={geo} alt="geo" />
                        <span>Somewhere in the World</span>
                    </button>
                </div>
                <div className='footer__line' ></div>
                <div className='footer__policy' >
                    <div className='footer__policy-buttons' >
                        <button><img src={facebook} alt="facebook" /></button>
                        <button><img src={twitter} alt="twitter" /></button>
                        <button><img src={instagram} alt="instagram" /></button>
                    </div>
                    <p>YourBank All Rights Reserved</p>
                    <div className='footer__policy-container' >
                        <p>Privacy Policy</p>
                        <div className='footer__vertical-line'></div>
                        <p>Terms of Service</p>
                    </div>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer