import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser, logout } from './store/userSlice';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './Button';
import { MenuAbout } from './MenuAbout';
import { MenuProjects } from './MenuProjects';
import './NavBar.css'
import Dropdown from './Dropdown';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [about, setAbout] = useState(undefined);
  const [project, setProject] = useState(undefined);

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
            <Dropdown menuItem={MenuAbout} />
            
          </NavItem>

          <NavItem name="Downloads" link="/downloads" closeMobileMenu={closeMobileMenu}/>
          
          <NavItem name="Projects" link="#" iconClass="fas fa-caret-down" closeMobileMenu={closeMobileMenu}>
            <Dropdown menuItem={MenuProjects} />
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
  const node = useRef();
  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <li ref={node} className="nav-item" onClick={() => setOpen(!open)}>
      <Link to={props.link} className="nav-links" onClick={props.closeMobileMenu}>
        {props.name} {props.iconClass && <i className={props.iconClass}/>}
      </Link>

      {open && props.children}
    </li>
  )
}

export default NavBar;
