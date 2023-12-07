import logo from './../../../img/Assets/shape-30.svg'
import './header.css'

import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();


  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__logo'>
            <img src={logo} alt="Logo" />
            <span>YourBank</span>
          </div>
          <nav className='header__nav'>
            <ul>
              <li className={isActive('/')}><Link to="/">Home</Link></li>
              <li className={isActive('/careers')}><Link to="/careers">Careers</Link></li>
              <li className={isActive('/about')}><Link to="/about">About</Link></li>
              <li className={isActive('/security')}><Link to="/security">Security</Link></li>
            </ul>
          </nav>
          <div className='header__authorization'>
            <ul>
              <li><a href="">Sign Up</a></li>
              <li className='header__authorization-item'><a href="">Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
