import React, { useMemo } from "react";
import ExperienceCard from "../components/ExperienceCard";

const iconList = ["💻", "🧠", "🚀", "🔐", "🧪", "🛠️", "🎯", "📡"];

const experienceList = [
    {
      title: "Senior Software Engineer",
      company: "Ant Group - Endpoint Security Platform",
      time: "Sep 2020 – Present",
      description:
        "Built a high-performance policy engine for 80K+ devices, supporting millions of strategy queries. Delivered centralized terminal management, EDR, DLP, and commercial-grade AV capabilities. Saved $120K annually by replacing third-party solutions.",
    },
    {
      title: "Senior Software Engineer",
      company: "Ant Group - Threat Intelligence Platform",
      time: "2021 – 2023",
      description:
        "Led development of an AI-powered threat intelligence engine with OpenAPI, Flink pipelines, and automation logic. Commercialized with ByteDance and supported 10+ teams and 7+ external clients.",
    },
    {
      title: "Senior Software Engineer",
      company: "Ant Group - Plugin Risk Analysis Platform",
      time: "2022 – 2023",
      description:
        "Designed a scheduling layer to orchestrate LLM agents in mobile security workflows. Improved plugin classification by 57% through concurrency-aware routing and LLM prompt strategies.",
    },
    {
      title: "Software Engineer",
      company: "Ant Group - LLM Risk Detection Platform",
      time: "2022 – 2023",
      description:
        "Developed a real-time Flink + graph detection engine to monitor malicious AI agents. Covered 100% of Alipay’s LLM security needs with <5% false positives and automated SOAR triggers.",
    },
    {
      title: "Software Engineer",
      company: "Ant Group - Incident Response Platform",
      time: "2020 – 2021",
      description:
        "Built a Camunda-based SOAR system enabling automated security incident response. Reduced average response time from 8h to 30min through customizable workflows.",
    },
  ];


function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
  

function Experience() {
    const randomizedIcons = useMemo(() => shuffle(iconList), []);

    return (
        <div>
            {/* <h1> 💼 Experience </h1> */}
            {
                experienceList.map(
                (item, index) => (
                    <ExperienceCard
                        title = {item.title}
                        company = {item.company}
                        time = {item.time}
                        description = {item.description}
                        icon= {randomizedIcons[index]}
                    />
                )

                )
            }

        </div>
    );
}

export default Experience;