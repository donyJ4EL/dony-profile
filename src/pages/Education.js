import React from "react";
import EducationCard from "../components/EducationCard";

const educationList = [
  {
    school: "Nanjing University",
    degree: "Master of Software Engineering",
    time: "2019 - 2021",
  },
  {
    school: "Jilin University",
    degree: "Bachelor of Software Engineering",
    time: "2015 - 2019",
  },
];

function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800 dark:text-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">🎓 Education Background</h2>
        {educationList.map((item, index) => (
          <EducationCard
            key={index}
            school={item.school}
            degree={item.degree}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;
