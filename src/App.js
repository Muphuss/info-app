import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import GreetingPage from './components/GreetingPage';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import OtherPage from './components/OtherPage';
import About from './components/About';
import FeedbackForm from './components/FeedbackForm';
import NotFoundPage from './components/NotFoundPage';
import ScrollIndicator from './components/ScrollIndicator';
import './components/Sidebar.css';
import './components/GreetingPage.css';
import './App.css';

const LayoutWrapper = ({ children, isSidebarOpen }) => {
    const location = useLocation();
    const isOverlappingPage = ['/', '/projects', '/home', '/other', '/about', '/feedback'].includes(location.pathname);

    return (
        <div
            className={`content-wrapper ${isOverlappingPage ? 'overlapping-page' : ''}`}
            style={{
                marginLeft: isSidebarOpen && !isOverlappingPage ? '250px' : '0',
                transition: 'margin-left 0.3s',
                padding: isOverlappingPage ? '0' : '20px',
                position: 'relative',
            }}
        >
            <div style={{ position: 'relative' }}>
                <ScrollIndicator />
            </div>
            <div className="transition-wrapper">{children}</div>
        </div>
    );
};

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        document.body.classList.toggle('no-scroll', !isSidebarOpen);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <Router>
            <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <LayoutWrapper isSidebarOpen={isSidebarOpen}>
                <Routes>
                    <Route path="/" element={<GreetingPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectPage />} />
                    <Route path="/other" element={<OtherPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/feedback" element={<FeedbackForm />} /> {/* Add the feedback route */}
                    <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
                </Routes>
            </LayoutWrapper>
        </Router>
    );
}

export default App;
