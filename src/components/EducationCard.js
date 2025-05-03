import React from "react";

function EducationCard({ school, degree, time }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-4 transform transition-transform hover:-translate-y-1">
      <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">{school}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{degree}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{time}</p>
    </div>
  );
}

export default EducationCard;