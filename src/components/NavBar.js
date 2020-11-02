import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser, logout } from './store/userSlice';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './Button';
import './NavBar.css'
import Dropdown from './Dropdown';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const user = useSelector(selectUser);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          ostimeline {user.user && <span>, {user.user.role}</span>}
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>

          <NavItem name="Home" link="/" closeMobileMenu={closeMobileMenu}/>

          <NavItem name="About" link="#" iconClass="fas fa-caret-down" closeMobileMenu={closeMobileMenu}>
            <Dropdown menuItem="about" />
          </NavItem>

          <NavItem name="Downloads" link="/downloads" closeMobileMenu={closeMobileMenu}/>
          
          <NavItem name="Projects" link="#" iconClass="fas fa-caret-down" closeMobileMenu={closeMobileMenu}>
            <Dropdown menuItem="projects" />
          </NavItem>

          {user.user 
            && user.user.role === "Admin" 
            && <NavItem name="Projects" link="/registration" closeMobileMenu={closeMobileMenu}/>}

          <li className="nav-item">
              <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                {user.user && <span>Logout</span>}
                {!user.user && <span>Login</span>}
              </Link>
          </li>
        </ul>
        {user.user && <Button buttonStyle="btn--outline">LOGOUT</Button>}
        {!user.user &&  <Button buttonStyle="btn--outline">LOGIN</Button>}

      </div>
    </nav>
  );
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item" onClick={() => setOpen(!open)}>
      <Link to={props.link} className="nav-links" onClick={props.closeMobileMenu}>
        {props.name} {props.iconClass && <i className={props.iconClass}/>}
      </Link>

      {open && props.children}
    </li>
  )
}

export default NavBar;
