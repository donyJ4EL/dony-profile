import React from "react";
import EducationItem from "../components/EducationItem";

// 包含页面标题和列表数据
// 定义可复用的展示组件
// 教育数据数组
const educationList = [
    {
        school: "Nanjing University",
        degree: "Master of Software Engineering",
        year: "2019 - 2021",
    },
    {
      school: "Jilin University",
      degree: "Bachelor of Software Engineering",
      year: "2015 - 2019",
    },
    
];

function About() {
    return (
        <div style={{ padding : "2rem" }}>
            <h1>About me</h1>
            <h2>🎓 Education Background</h2>
            {
                educationList.map(
                    (item) => (
                        <EducationItem
                        school = {item.school}
                        degree = {item.degree}
                        year = {item.year}
                        />
                    )
                )
            }
        </div>
    );
}

export default About;