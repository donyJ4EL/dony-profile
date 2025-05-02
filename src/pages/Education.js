import React from "react";
import "../Education.css";
import EducationCard from "../components/EducationCard";

// 包含页面标题和列表数据
// 定义可复用的展示组件
// 教育数据数组
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
        <div className="education-container">
            <h2>🎓 Education Background</h2>
            {
                educationList.map(
                    (item) => (
                        <EducationCard
                        school = {item.school}
                        degree = {item.degree}
                        time = {item.time}
                        />
                    )
                )
            }
        </div>
    );
}

export default Education;