import React from 'react';

function EducationItem({school, degree, year}) {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <h3>{school}</h3>
            <p>{degree}</p>
            <p>{year}</p>
        </div>
    );

}

export default EducationItem;