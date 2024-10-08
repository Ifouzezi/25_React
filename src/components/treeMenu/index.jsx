import React from 'react';
import MenuItem from './menuItem';
import menuData from './data'; // Import your menuData
import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <aside className="sidebar">
        <ul className="sidebar-menu">
          {menuData.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
