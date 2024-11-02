import React, { useState } from 'react';
import './style.css';

const Tabs = ({ tabsContent, onChange }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if (onChange) {
            onChange(index);
        }
    };

    return (
        <div className="wrapper">
            <h1>Custom Tabs</h1>
            <div className="heading">
                {tabsContent.map((tabItem, index) => (
                    <span
                        key={index}
                        className={`label ${activeTab === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tabItem.label}
                    </span>
                ))}
            </div>
            <div className="content">
                {tabsContent[activeTab] && tabsContent[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
