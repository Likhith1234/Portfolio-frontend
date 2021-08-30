import React, { Component } from 'react';
import "./styles/ContactMe.css";
import gmail_img from "../images/gmail.png";
import in_img from "../images/linkedin.png";
import gh_img from "../images/github.png";

export default class ContactMe extends Component {
    sendMail = (e) => {
        e.preventDefault();
        const doc = document.getElementsByClassName("inputs");
        const mailDetails = {
            "name": doc[0].value,
            "email": doc[1].value,
            "subject": doc[2].value,
            "message": doc[3].value
        };
        fetch("https://likhith-portfolio-backend.herokuapp.com/mail", {
            method: "post",
            body: JSON.stringify(mailDetails),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then((res) => {
            document.getElementsByClassName("msg")[0].innerText = res;
        })
    }
    render() {
        return (
            <div className="contact-me-container">
                <form className="contact-form" onSubmit={(event) => {this.sendMail(event)}}>
                    <div>
                        <div className="msg">
                    
                        </div>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input id="name" className="inputs" type="text" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input id="email" className="inputs" type="email" required />
                        </div>
                        <div>
                            <label htmlFor="subject">Subject: </label>
                            <input id="subject" className="inputs" type="text" required />
                        </div> 
                    </div>
                    <div>
                        <label htmlFor="message">Message: </label>
                        <textarea id="message" className="inputs" type="text" rows="6" cols="50" required></textarea>
                    </div>
                    <div>
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </form>
                <div className="social-links">
                    <div>
                        <a href="mailto:likhith.dev.web@gmail.com?subject=Mail%20From%20your%20Portfolio"  rel="noopener noreferrer" target="_blank">
                            <img src={gmail_img} alt="Mail me" />
                        </a>
                        {/* <p className="hovering-text">Gmail</p> */}
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/sai-likhith-adari-5a58931a6/" rel="noopener noreferrer" target="_blank">
                            <img src={in_img} alt="LinkedIn" />
                        </a>
                        {/* <p className="hovering-text">LinkedIn</p> */}
                    </div>
                    <div>
                        <a href="https://github.com/Likhith1234" rel="noopener noreferrer" target="_blank">
                            <img src={gh_img} alt="Github" />
                        </a>
                        {/* <p className="hovering-text">Github</p> */}
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
