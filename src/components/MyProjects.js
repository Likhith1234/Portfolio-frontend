import "./styles/MyProjects.css";
import projects from "../stocks/projects.json";
import enroll_form from "../images/Enrollment-Form.png";
// import signup_login from "../images/Signup-Login img.png";

import React, { Component } from 'react';

export default class MyProjects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            projects: projects
        }
    }
    

    componentDidMount = () => {
        let projectsString = "";
        this.state.projects.forEach((project) => {
            let {name, img, src_code, project_link} = project;
            let currentString = `<div className="project-item">
                                    <h3>${name}</h3>
                                    <img className="project-pic" src=${enroll_form} alt=${name} />
                                    <a className="project-links" target="_blank" href=${src_code}>Source Code</a><br/>
                                    <a className="project-links" target="_blank" href=${project_link}>Webpage Link</a>
                                </div>`;
            projectsString += currentString;
        });
        document.getElementsByClassName("projects-container")[0].innerHTML = projectsString;

    }

    render() {
        return (
            <div className="main">
                <h1>My projects</h1>
                <div className="projects-container">
                    
                </div>
            </div>
        )
    }
}
