import "./styles/NavBar.css";
import logo from "../images/logo.jpg";
import ham from "../images/hamb.jpg";

import React, { Component } from 'react'

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.scrollRef = React.createRef()
    }
    
    excuteScroll = (y) => {
        y = 600 * y;
        console.log(y);
        window.scrollTo(0,y);
    }

    showMenu = () => {
        document.getElementsByClassName("list-items")[0].innerHTML = this.state.menu;
        document.getElementsByClassName("ham-items")[0].innerHTML = this.state.menu;
    }
    
    openHam = () => {
        let current_display = document.getElementsByClassName("ham-items")[0].style.display;
        if (current_display !== "flex")
        {
            // document.getElementsByClassName("ham-items")[0].style = {opacity: 1, display: "flex"};
            document.getElementsByClassName("ham-items")[0].style = "display: flex";
        }
        else document.getElementsByClassName("ham-items")[0].style = {opacity : 0, display: "none"};
    }

    // componentDidMount = () => {
    //     this.showMenu();
    // }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="logo">
                        <a href="/">
                            <img className="logo-img" src={logo} alt="logo not found" />
                        </a>
                    </div>
                    <ul className="list-items">
                        <li className="list-item">
                            <button onClick={() => this.excuteScroll(0)} >Home</button>
                        </li>
                        <li className="list-item">
                            <button onClick={() => this.excuteScroll(1)} >About</button>
                        </li>
                        <li className="list-item">
                            <button onClick={() => this.excuteScroll(2)} >Skills</button>
                        </li>
                        <li className="list-item">
                            <button onClick={() => this.excuteScroll(3)} >My Projects</button>
                        </li>
                        <li className="list-item">
                            <button onClick={() => this.excuteScroll(4)} >Contact Me</button>
                        </li>
                    </ul>

                    <button className="menu" onClick={() => this.openHam()}>
                        <img className="ham" src={ham} alt="hamburger" />
                    </button>
                </nav>
                <ul className="ham-items">
                    <li className="list-item">
                        <button onClick={() => this.excuteScroll(0)} >Home</button>
                    </li>
                    <li className="list-item">
                        <button onClick={() => this.excuteScroll(1)} >About</button>
                    </li>
                    <li className="list-item">
                        <button onClick={() => this.excuteScroll(2)} >Skills</button>
                    </li>
                    <li className="list-item">
                        <button onClick={() => this.excuteScroll(3)} >My Projects</button>
                    </li>
                    <li className="list-item">
                        <button onClick={() => this.excuteScroll(4)} >Contact Me</button>
                    </li>
                </ul>
            </div>
        )
    }
}
