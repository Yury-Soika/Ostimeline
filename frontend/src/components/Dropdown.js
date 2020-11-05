import React, { useState } from 'react';
import './Dropdown.scss';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const [click, setClick] = useState(false);

  return (
    <ul
      onClick={() => setClick(!click)}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >

      {props.menuItem && props.menuItem.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
