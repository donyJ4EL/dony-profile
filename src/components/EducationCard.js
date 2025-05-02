import React from 'react';
import "../EducationCard.css";

function EducationCard({school, degree, time}) {
    return (
        <div className='edu-card'>
            <h3>{school}</h3>
            <p className='degree'>{degree}</p>
            <p className='time'>{time}</p>
        </div>
    );

}

export default EducationCard;