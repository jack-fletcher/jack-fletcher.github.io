import React, {useEffect, useState} from "react";
import './NavBar.css';

export default function NavBar(){

    const [isNavExpanded, setIsNavExpanded] = useState(false)


    useEffect(() => {
        SetInitialSliderState();
    }, []);
    function ToggleDarkMode() {
        if (document.documentElement.classList.contains("light")) {
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
          } else if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
          }
    }
    function SetInitialSliderState(){
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add("dark")
          } else {
            document.documentElement.classList.add("light")
          }

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
            document.getElementById("nav-slider").checked = false;
            console.log("hit1");
        }

        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
            document.getElementById("nav-slider").checked = true;
            console.log("hit2");
        }
    }
    return (
        <header>
            <nav className="navigation">
                <p className="navAuthorName"> Jack Fletcher </p>
                {/* Switch shamelessly used from : https://codepen.io/alvarotrigo/pen/zYPydpB */}
                <div className='nav-toggle-switch'>
            <label className="nav-toggle-label" onChange={() => ToggleDarkMode()}>
                <input id="nav-slider"className="nav-toggle-checkbox" type = 'checkbox'/>
                <span className='nav-slider'></span>
            </label>
        </div>
                <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                {/* icon from heroicons.com */}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                    >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </button>
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}> 
                <ul>
                    <li> <a className="navText" href="/"> Home </a> </li>
                    <li> <a className="navText" href="#about"> About </a> </li>
                    <li> <a className="navText" href="#education"> Education </a> </li>
                    <li> <a className="navText" href="#projects"> Projects </a> </li>
                    <li> <a className="navText" href="/assets/cv.pdf" target="_blank"> Resume </a> </li>
                    <li> <a className="navText" href="#contact"> Contact </a> </li>
                </ul>
                </div>
            </nav>
        </header>
    );

}
