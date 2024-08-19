import React, { useEffect, useState } from 'react';
import './GreetingPage.css'; // Import the CSS file

const GreetingPage = () => {
    const [animateParticles, setAnimateParticles] = useState(false);

    useEffect(() => {
        setAnimateParticles(true);
    }, []);

    return (
        <div className="greeting-page">
            <h1>Welcome to the <br /> <span className="logo-span-light">TRUE</span> <span className="logo-span">INNOVATION</span> <br />Info App</h1>
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
                            animationDuration: `${Math.random() * 1 + 0.5}s`,
                            animationIterationCount: 'infinite'
                        }}
                    />
                ))}
            </div>
            <p>Your journey starts here. Get started by clicking the button below. ↓ </p>
            <button className="get-started-button" onClick={() => window.location.href = '/home'}>
                Get Started
            </button>
        </div>
    );
};

export default GreetingPage;
