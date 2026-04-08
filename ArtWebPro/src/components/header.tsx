import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();
    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    // Side effect: apply theme to root element
    useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [isDarkMode]);

    return (
        <header>
            <div className="header-inner">
                <div className="header-brand" onClick={() => navigate('/')}>Arthur<span>Web</span></div>

                <nav>
                    <button type="button" className="nav-btn" onClick={() => navigate('/about')}>
                        <span>About</span>
                    </button>
                    <button type="button" className="nav-btn" onClick={() => navigate('/projects')}>
                        <span>Projects</span>
                    </button>
                    <div className="divider"></div>

                    <button
                        className="toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        <span className="toggle-label">
                            {isDarkMode ? 'Dark' : 'Light'}
                        </span>

                        <div className="toggle-track"></div>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;