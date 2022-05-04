import React from "react";
import Project from "../components/Project";
import '../styles/Project.css';

const projectsData = {
    p1: {
        name: "Workday Scheduler",
        link: "https://will-pikus.github.io/Workday-Scheduler/",
        desc: "JavaScript/BootStrap",
        imgClass: "p1"
    },
    p2: {
        name: "Weather Dashboard",
        link: "https://will-pikus.github.io/weather-dashboard/",
        desc: "JavaScript/APIs",
        imgClass: "p2"
    },
}

export default function Projects() {
    return (
        <div>
            <Project name={projectsData.p1.name} link={projectsData.p1.link} desc={projectsData.p1.desc} imgClass={projectsData.p1.imgClass}/>
            <Project name={projectsData.p2.name} link={projectsData.p2.link} desc={projectsData.p2.desc} imgClass={projectsData.p2.imgClass}/>
        </div>
    );
}