import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './subMenu';
import './styles.css';

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    if (item.subMenu.length > 0) {
      setOpen(!open);  // Toggle open/close
    }
  };

  return (
    <li>
      <div onClick={handleToggle} className="menu-item">
        {/* The title and path for the menu item */}
        <a className="menu-title">{item.title}</a>

        {/* Render Font Awesome icons depending on whether submenu is open */}
        {item.subMenu.length > 0 && (
          <span className="toggle-icon">
            <FontAwesomeIcon icon={open ? faMinus : faPlus } className="icon-style"/>
          </span>
        )}
      </div>

      {/* Render the submenu if open */}
      {open && item.subMenu.length > 0 && (
        <ul className="sub-menu">
          <SubMenu subMenu={item.subMenu} />
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
