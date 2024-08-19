import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineData = [
    { year: '2014', title: 'Firmengründung', description: 'Description of the event goes here.' },
    { year: '2015', title: 'Another Event', description: 'More details about this event.' },
    { year: '2016', title: 'Event', description: 'Details about the previous event.' },
    
  ];

  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      <div className="timeline-wrapper">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" style={{ top: `${index * 100}px` }}></div>
            <div className="timeline-date">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
