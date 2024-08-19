// src/components/HamburgerMenu.js
import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleSidebar }) => {
    return (
        <button
            onClick={toggleSidebar}
            className={`hamburger-button ${isOpen ? 'open' : ''}`}
        >
            <i></i>
            <i></i>
            <i></i>
        </button>
    );
};

export default HamburgerMenu;
