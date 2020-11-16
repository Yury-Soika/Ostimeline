import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './users/userSlice';
import { Link } from 'react-router-dom';
import { MenuAbout } from './MenuAbout';
import { MenuProjects } from './MenuProjects';
import Dropdown from './Dropdown';
import NavItem from './NavItem';
import './NavBar.scss'
import './Button.scss';

const NavBar = () => {
  const [click, setClick] = useState(false);
  
  const user = useSelector(selectUser);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-title" onClick={closeMobileMenu}>
          ostimeline {user && <span>, {user.role}</span>}
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "navbar-menu active" : "navbar-menu"}>

          <NavItem className="navbar-item" name="News" link="/" closeMobileMenu={closeMobileMenu}/>

          <NavItem className="navbar-item desktop" name="About" link="#" iconClass="fas fa-caret-down" closeMobileMenu={closeMobileMenu}>
            <Dropdown menuItem={MenuAbout} />
          </NavItem>
          
          <NavItem className="navbar-item mobile" name="About ostimeline" link="/about" closeMobileMenu={closeMobileMenu}/>
          
          <NavItem className="navbar-item mobile" name="Architecture" link="/architecture" closeMobileMenu={closeMobileMenu}/>
          
          <NavItem className="navbar-item mobile" name="Installation" link="/installation" closeMobileMenu={closeMobileMenu}/>

          <NavItem className="navbar-item" name="Downloads" link="/downloads" closeMobileMenu={closeMobileMenu}/>
          
          <NavItem className="navbar-item desktop" name="Projects" link="#" iconClass="fas fa-caret-down" closeMobileMenu={closeMobileMenu}>
            <Dropdown menuItem={MenuProjects} />
          </NavItem>

          <NavItem className="navbar-item mobile" name="Wctablet" link="/wctablet" closeMobileMenu={closeMobileMenu}/>

          <NavItem className="navbar-item mobile" name="Gstreamer" link="/gstreamer" closeMobileMenu={closeMobileMenu}/>

          {user 
            && user.role === "Admin" 
            && <NavItem className="navbar-item" name="Admin" link="/admin" closeMobileMenu={closeMobileMenu}/>}

          <li className="navbar-item mobile">
              <Link to="/login" className="navbar-links-mobile" onClick={closeMobileMenu}>
                {user && <span>Logout</span>}
                {!user && <span>Login</span>}
              </Link>
          </li>
        </ul>

        <Link to={`/login`}>
          <button type="button" className="btn btn--outline btn--medium btn-mobile">
            {user && <span>LOGOUT</span> }
            {!user && <span>LOGIN</span> }
          </button>
        </Link>

      </div>
    </nav>
  );
}

export default NavBar;
