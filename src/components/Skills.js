import React, { Component } from 'react';
import "./styles/Skills.css";

export default class Skills extends Component {
    render() {
        return (
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-card">
                    <div className="progress-bar">
                        <div className="progress-shade" style={{minWidth: "68%"}}>Python</div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-shade" style={{minWidth: "75%"}}>HTML</div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-shade" style={{minWidth: "64%"}}>CSS</div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-shade" style={{minWidth: "65%"}}>React</div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-shade" style={{minWidth: "60%"}}>Node</div>
                    </div>
                </div>
            </div>
        )
    }
}
