import { useState, useEffect } from "react";

const UseLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        // Check if the key exists in local storage
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    });

    // Update local storage whenever the value changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default UseLocalStorage;
