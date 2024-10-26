import React from "react";
import "./style.css";
import UseLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = UseLocalStorage("theme", false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={`lightDarkMode ${isDarkMode ? "dark" : "light"}`}>
            <div className="containerLD">
                <h1>Hello World</h1>
                <button onClick={toggleTheme}>
                    Switch to {isDarkMode ? "Light" : "Dark"} Mode
                </button>
            </div>
        </div>
    );
};

export default LightDarkMode;
