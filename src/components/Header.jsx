import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './Header.css'; 

const Header = ({ isOpen, toggleSidebar }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); 
    const location = useLocation();


    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div className="header">
            {/* Only show the menu button on mobile */}
            {!isDesktop && (
                <button className="menu-btn" onClick={toggleSidebar}>
                    <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            )}
            
            {/* Show logo on the left and links in the center */}
            <div className="header-content">
                <div className="logo">
                    <Link to="/">
                        <h1>
                            <span className="logo-span-light">TRUE</span> <span className="logo-span">INNOVATION</span>
                        </h1>
                    </Link>
                </div>
                {isDesktop && (
                    <div className="header-links">
                        <Link to="/home" className={isActive('/home')}><i className="fa fa-info-circle"></i> Info</Link>
                        <Link to="/projects" className={isActive('/projects')}><i className="fa fa-folder"></i> Projects</Link>
                        <Link to="/other" className={isActive('/other')}><i className="fa fa-th"></i> Other</Link>
                        <Link to="/about" className={isActive('/about')}><i className="fa-solid fa-building"></i> About Us</Link>
                        <Link to="/feedback" className={isActive('/feedback')}><i class="fa-solid fa-comments"></i>Feedback</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;