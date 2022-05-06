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
    p3: {
        name: "Weather Dashboard",
        link: "https://will-pikus.github.io/weather-dashboard/",
        desc: "JavaScript/APIs",
        imgClass: "p2"
    },
    p4: {
        name: "Weather Dashboard",
        link: "https://will-pikus.github.io/weather-dashboard/",
        desc: "JavaScript/APIs",
        imgClass: "p2"
    },
    p5: {
        name: "Weather Dashboard",
        link: "https://will-pikus.github.io/weather-dashboard/",
        desc: "JavaScript/APIs",
        imgClass: "p2"
    },
    p6: {
        name: "Weather Dashboard",
        link: "https://will-pikus.github.io/weather-dashboard/",
        desc: "JavaScript/APIs",
        imgClass: "p2"
    },
}

export default function Projects() {
    return (
        <div className="container">
            <Project name={projectsData.p1.name} link={projectsData.p1.link} desc={projectsData.p1.desc} imgClass={projectsData.p1.imgClass}/>
            <Project name={projectsData.p2.name} link={projectsData.p2.link} desc={projectsData.p2.desc} imgClass={projectsData.p2.imgClass}/>
            <Project name={projectsData.p3.name} link={projectsData.p3.link} desc={projectsData.p3.desc} imgClass={projectsData.p3.imgClass}/>
            <Project name={projectsData.p4.name} link={projectsData.p4.link} desc={projectsData.p4.desc} imgClass={projectsData.p4.imgClass}/>
            <Project name={projectsData.p5.name} link={projectsData.p5.link} desc={projectsData.p5.desc} imgClass={projectsData.p5.imgClass}/>
            <Project name={projectsData.p6.name} link={projectsData.p6.link} desc={projectsData.p6.desc} imgClass={projectsData.p6.imgClass}/>
        </div>
    );
}