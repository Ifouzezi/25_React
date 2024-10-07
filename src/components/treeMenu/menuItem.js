import React, { useState } from 'react';
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

        {/* Render + or - depending on whether submenu is open */}
        {item.subMenu.length > 0 && (
          <span className="toggle-icon">{open ? '-' : '+'}</span>
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
