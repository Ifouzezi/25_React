import React from 'react';
import MenuItem from './menuItem';

const SubMenu = ({ subMenu }) => {
  return (
    <ul className="submenu">
      {subMenu.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default SubMenu;
