import React, { useEffect, useState, useRef } from 'react';

const NavItem = (props) => {
  const node = useRef();
  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    if (!node.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <li ref={node} className={props.className} onClick={() => setOpen(!open)}>
      <a href={props.link} className="navbar-links" onClick={props.closeMobileMenu}>
        {props.name} {props.iconClass && <i className={props.iconClass}/>}
      </a>

      {open && props.children}
    </li>
  )
}

export default NavItem;