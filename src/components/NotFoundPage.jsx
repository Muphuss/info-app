import React from 'react';
import './NotFoundPage.css'; 

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <div className="particle-background"></div>
            <div className="not-found-content">
            <i class="fa-solid fa-triangle-exclamation"></i>
                <h1>404</h1>
                <p>Sorry, the page you are looking for does not exist.</p>

                
            <button className="get-started-button" onClick={() => window.location.href = '/projects'}>
                    Back to Projects
            </button>
                
            </div>
        </div>
        
    );
};


export default NotFoundPage;


