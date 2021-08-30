import React, { Component } from 'react';
import "./styles/About.css";

export default class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h1>About Me</h1>
                <div className="card">
                    I am a <strong>MERN-Stack Developer</strong> and a <strong>Learning Enthusiastic</strong>. I am interested in working with Technologies through learning, that are becoming part of Development.
                    <blockquote>Interests: Web Development, Linux Administration, Docker, etc...</blockquote>
                    <i>Currently, I am pursing 3rd Year B.Tech in <br /><b>NATIONAL INSTITUTE OF TECHNOLOGY, Durgapur.</b></i>
                </div>
            </div>
        )
    }
}
