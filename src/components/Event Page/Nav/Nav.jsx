import React, { useState, useEffect } from 'react';
import './nav.css';

const Nav = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [showGoTop, setShowGoTop] = useState(false);

    const menuItems = [
        { title: 'Club 1', to: "#things agency2", options: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6'] },
        { title: 'Club 2', to: "#club2-name", options: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6'] },
        { title: 'Club 3', to: "#club3-name", options: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6'] },
        { title: 'Club 4', to: "#club4-name", options: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6'] },
        { title: 'Club 5', to: "#club5-name", options: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6'] },
        { title: 'Club 6', to: "#club6-name", options: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6'] }
    ];


    const handleMouseEnter = (index) => {
        setActiveMenu(index);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowGoTop(true);
            } else {
                setShowGoTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="navbar">
            <div className="menu">
                {menuItems.map((item, index) => (
                    <div
                        className="menu-item"
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href={item.to}>{item.title}</a>
                        <div className={`dropdown ${activeMenu === index ? 'active' : ''}`}>
                            {item.options.map((option, optIndex) => (
                                <div key={optIndex} className="dropdown-option">
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {showGoTop && (
                <button className="go-top-btn" onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </div>
    );
};

export default Nav;