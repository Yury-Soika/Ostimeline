import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser, logout } from './store/userSlice';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css'
import Dropdown from './Dropdown';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const user = useSelector(selectUser);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

   const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
	    <nav className="navbar">
	      <div className="navbar-container">
  	        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
  	          ostimeline {user.user && <span>, {user.user.role}</span>}
  	        </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About <i className="fas fa-caret-down"/>
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
              <Link to='/downloads' className='nav-links' onClick={closeMobileMenu}>
                Downloads
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects/wctablet' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            {user.user && user.user.role === 'Admin' &&
              <li className='nav-item'>
                <Link to='/registration' className='nav-links' onClick={closeMobileMenu}>
                  Registration
                </Link>
              </li>
            }
            <li className='nav-item'>
                <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                  {user.user && <span>Logout</span>}
                  {!user.user && <span>Login</span>}
                </Link>
            </li>
          </ul>
          {button && user.user && <Button buttonStyle='btn--outline'>LOGOUT</Button>}
          {button && !user.user &&  <Button buttonStyle='btn--outline'>LOGIN</Button>}

	      </div>
	    </nav>
    </>
  );
}

export default NavBar;