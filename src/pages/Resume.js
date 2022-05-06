import React from "react";
import '../styles/Resume.css';

export default function Resume() {
    return (
        <div>
            <div className='resume-page'>
                <div className="column skills">
                    <div className="skills-container">
                        <h2 className="resume-header">RESUME</h2>
                        <h2>Skills</h2>
                        <div className="skills-pad">
                            <p className="p-skills">Full Stack Web Development</p>
                            <p className="p-skills">Graphic Design</p>
                            <p className="p-skills">Supply Chain Management</p>
                            <p className="p-skills">Management Information Systems</p>
                            <p className="p-skills">Business Analytics</p>
                         </div>
                    </div>
                </div>
                <div className="column resume">
                    <a href="../../public/fullstack-dev-resume.pdf" className="resume-pdf"></a>
                </div>
            </div>
        </div>
    );
}