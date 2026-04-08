import React, { useState } from 'react';
import '../App.css';

const Header: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // Add logic to apply theme to body or root element
        document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
    };

    return (
        <header>
            <div className="header-inner">
                <div className="brand">Arthur<span>Web</span></div>
                <nav>
                    <button className="nav-btn"><span>About</span></button>
                    <button className="nav-btn"><span>Projects</span></button>
                    <div className="divider"></div>
                    <button className="toggle" id="themeToggle" aria-label="Toggle theme">
                        <span className="toggle-label" id="toggleLabel">Light</span>
                        <div className="toggle-track"></div>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;