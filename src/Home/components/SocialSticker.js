import React, {Component } from "react";
import './SocialSticker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function SocialSticker(){

    return(
        <div className="wrapper"> 
            <div className="sidebar">
                <div> <a className='Sticker' href="mailto:dev@jack-fletcher.me"><FontAwesomeIcon className="Img" icon={faEnvelope} size="3x" /></a></div>
                <div> <a className='Sticker' href="https://www.linkedin.com/in/-jack-fletcher/"><FontAwesomeIcon className="Img" icon={faLinkedin} size="3x" /></a></div>
                <div> <a className='Sticker' href="https://github.com/jack-fletcher"><FontAwesomeIcon className="Img" icon={faGithub} size="3x" /></a></div>
            </div>
        </div>
    );
}