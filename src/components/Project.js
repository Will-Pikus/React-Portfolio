import React from 'react';
import '../styles/Project.css';

function Project(props) {
  return (
    <div className='project'>

          <a href={props.link} className={props.imgClass}>
              <div className="card-header">
                  <h2>{props.name}</h2>
                  <h3>{props.desc}</h3>
              </div>
          </a>
    </div>
  );
}

export default Project;