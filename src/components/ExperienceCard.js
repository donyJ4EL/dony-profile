import React from "react";

function ExperienceCard({ title, company, time, description, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-md p-6 max-w-3xl mx-auto mb-6 transform transition-transform hover:-translate-y-1">
      <div className="text-3xl text-purple-600 mb-2">{icon}</div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <h3 className="text-sm text-gray-600 dark:text-gray-300 mt-1">{company}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{time}</p>
        <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
