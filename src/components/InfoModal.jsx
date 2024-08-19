import React from 'react';
import './InfoModal.css';

const InfoModal = ({ isOpen, onDismiss, title, content, subCards, isProjectPage }) => {
    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isProjectPage ? 'project-page' : 'info-page'}`} onClick={onDismiss}>
            <div className={`modal-content ${isProjectPage ? 'project-content' : 'info-content'}`} onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onDismiss}>
                    <i className="fa fa-times"></i>
                </button>
                <h2 className="modal-title">{title}</h2>
                <p className="modal-body">{content}</p>
                {isProjectPage && subCards && (
                    <div className="sub-cards-container">
                        {subCards.map((subCard, index) => (

                            <div key={index} className="sub-info-card">
                                <i className="fa fa-info-circle card-icon" aria-hidden="true"></i>
                                <div className="sub-card-header">{subCard.title || 'Info'}</div>
                                <div className="sub-card-body">{subCard.description}</div>
                                {subCard.link && (
                                    <div className="sub-card-footer">
                                        <a href={subCard.link} target="_blank" rel="noopener noreferrer">Learn more</a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InfoModal;
