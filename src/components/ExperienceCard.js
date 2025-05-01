import React, {useMemo} from "react";
import "../ExperienceCard.css";

function ExperienceCard({ title, company, time, description, icon }) {
    return (
        <div className="exp-card">
            <div className="exp-icon">
            {icon}
            </div>
            <div className="exp-content">
            <h2>{title}</h2>
            <h3>{company}</h3>
            <p><strong>{time}</strong></p>
            <p>{description}</p>
            </div>
        </div>
    );
  }

export default ExperienceCard;