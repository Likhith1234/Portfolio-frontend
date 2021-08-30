import React, { Component } from 'react';
import "./styles/Home.css";
import pic from "../images/logo.jpg";

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="introduction">
                    <h2 style={{borderBottom: "2px solid white", padding: "0 .5em"}}>Sai Likhith Adari</h2>
                    <strong>Student | MERN Stack Developer</strong>
                    <blockquote>Think as a developer, not as a user</blockquote>
                </div>
                <div className="img">
                    <img src={pic} alt="Likhith" />
                </div>
            </div>
        )
    }
}
