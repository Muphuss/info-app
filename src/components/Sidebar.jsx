import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [animateParticles, setAnimateParticles] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setAnimateParticles(true);
            document.body.classList.add('no-scroll');

            const timer = setTimeout(() => {
                setAnimateParticles(false);
            }, 1000); 
            
            // Clean up
            return () => {
                clearTimeout(timer);
                document.body.classList.remove('no-scroll');
            };
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    

    return (
        <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="logo-menu">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    <i className="fa fa-times"></i>
                </button>
                <div className={`particles ${animateParticles ? 'animate' : ''}`}>
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                width: `${Math.random() * 10 + 5}px`,
                                height: `${Math.random() * 10 + 5}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDuration: `${Math.random() * 1 + 0.5}s`
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="content">
                <ul className="nav-links">
                    <li>
                        <Link to="/home" onClick={toggleSidebar}>
                            <i className="fa fa-info-circle"></i> Infos
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={toggleSidebar}>
                            <i className="fa fa-folder"></i> Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/other" onClick={toggleSidebar}>
                            <i className="fa fa-th"></i> Contact Info
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleSidebar}>
                            <i className="fa-solid fa-user-group"></i> About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/feedback" onClick={toggleSidebar}>
                            <i className="fa-solid fa-comments"></i> Feedback
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Sidebar;
