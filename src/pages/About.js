import React from "react";
import '../styles/About.css';


export default function About() {
    return (
        <div className="header">
            <div className="about">
                <h3>My name is Will.</h3>
                <p>I have a diverse range of skills and passions. I love solving real world problems while making solutions look good. Check out my recent work and core competencies.</p>
            </div>
            <div>
                {/* <img className="meImg" src={mePhoto} alt="Me" /> */}
            </div>
        </div>
    );
}