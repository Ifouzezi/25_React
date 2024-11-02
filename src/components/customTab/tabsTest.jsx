import React from 'react';
import Tabs from './tabs';

const TabsTest = () => {
    const labels = ['Tab 1', 'Tab 2', 'Tab 3'];
    const tabsContent = labels.map((label, index) => ({
        label,
        content: <h1>This is content {index + 1}</h1>
    }));

    return (
        <Tabs
            tabsContent={tabsContent}
            onChange={(tabIndex) => console.log(`Selected tab: ${tabIndex}`)}
        />
    );
};

export default TabsTest;
