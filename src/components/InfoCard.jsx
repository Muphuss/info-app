
import React from 'react';
import './InfoCard.css';

const InfoCard = ({ title, description, link, icon, logo, isSubcard, isExpanded, onCardClick, showChevron = true }) => {

    const handleClick = () => {
        if (onCardClick) onCardClick();
    };

    return (
        <div className={`info-card ${isSubcard ? 'subcard' : ''}`} onClick={handleClick}>
            {logo ? (
                <div className="logo-container">
                    <img src={logo} alt={`${title} logo`} className="card-logo" />
                </div>
            ) : (
                <i className={`card-icon ${icon}`} aria-hidden="true"></i>
            )}
            <div className="card-header">{title}</div>
            <div className="card-body">{description}</div>
            {/* External link icon */}
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="external-link-icon">
                    <i className="fa fa-external-link" aria-hidden="true"></i>
                </a>
            )}
            {/* Chevron down arrow */}
            {!isSubcard && showChevron && (
                <div className={`chevron-icon ${isExpanded ? 'rotated' : ''}`}>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
            )}
        </div> 
    );
};

export default InfoCard;
