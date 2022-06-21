import React from "react";
import './NavBar.css';

export default function NavBar(){
    return (
        <header>
            <div className="nav">
                <a className="navAuthorName" href="/"> Jack Fletcher </a>
                <div className="navItems"> 
                <a className="navText" href="#home"> HOME </a>
                <a className="navText" href="#about"> ABOUT </a>
                <a className="navText" href="#education"> EDUCATION </a>
                <a className="navText" href="#projects"> PROJECTS </a>
                </div>
            </div>
        </header>
    );
}