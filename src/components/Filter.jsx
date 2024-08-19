import React, { useState, useEffect, useRef } from 'react';
import './Filter.css'; // Import the CSS for styling

const Filter = ({ onFilterChange }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const filterRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsFilterOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleFilterClick = (filterType) => {
        onFilterChange(filterType);
        setIsFilterOpen(false);
    };

    return (
        <div className="filter-container" ref={filterRef}>
            <button data-aos="fade-left" className="filter-btn" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <i className="fa fa-filter"></i>
            </button>
            {isFilterOpen && (
                <div className="filter-popup">
                    <div onClick={() => handleFilterClick('alphabetic')}>Alphabetic</div>
                    <div onClick={() => handleFilterClick('date-newest')}>Date (Newest to Oldest)</div>
                </div>
            )}
        </div>
    );
};

export default Filter;
