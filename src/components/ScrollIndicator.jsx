// src/components/ScrollIndicator.js
import React, { useEffect, useState } from 'react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    const updateScrollIndicator = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        setScrollWidth(scrollPercentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', updateScrollIndicator);
        return () => window.removeEventListener('scroll', updateScrollIndicator);
    }, []);

    return (
        <div className="scroll-indicator-wrapper">
            <div className="scroll-indicator" style={{ width: `${scrollWidth}%` }}></div>
        </div>
    );
};

export default ScrollIndicator;
