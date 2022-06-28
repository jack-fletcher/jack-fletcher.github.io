import React, {useState} from "react";
import './NavBar.css';

export default function NavBar(){

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <header>
            <nav className="navigation">
                <p className="navAuthorName"> Jack Fletcher </p>
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
