import React, { useState } from 'react';
import './Dropdown.scss';

function Dropdown(props) {
  const [click, setClick] = useState(false);

  return (
    <ul
      onClick={() => setClick(!click)}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >

      {props.menuItem && props.menuItem.map(item => {
        return (
          <li key={item.title}>
            <a
              className={item.cName}
              href={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
