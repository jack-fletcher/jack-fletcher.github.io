import React, {Component } from "react";
import './ContactMe.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt,faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
export default function ContactMe(){

    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
        rootMargin: '0px -100px',
      });

      const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "+100%" },
      }

    return(
        <div id="contact" >
            <motion.h1 ref={titleRef} animate={titleInView ? "open" : "closed"} variants={variants} transition={{ duration: 1.5 }} className="ContactMe-Title"> Fancy a chat? </motion.h1>
            <div className="ContactMe-ButtonWrapper">
            <motion.div ref={titleRef} animate={titleInView ? "open" : "closed"} variants={variants} transition={{ duration: 1.5 }}> <a className='ContactMe-Btn' href="mailto:dev@jack-fletcher.me"><FontAwesomeIcon className="" icon={faEnvelope} size="3x" /></a></motion.div>
                <motion.div ref={titleRef} animate={titleInView ? "open" : "closed"} variants={variants} transition={{ duration: 1.5 }}> <a className='ContactMe-Btn' href="https://www.linkedin.com/in/-jack-fletcher/"><FontAwesomeIcon className="" icon={faLinkedin} size="3x" /></a></motion.div>
                <motion.div ref={titleRef} animate={titleInView ? "open" : "closed"} variants={variants} transition={{ duration: 1.5 }}> <a className='ContactMe-Btn' href="https://github.com/jack-fletcher"><FontAwesomeIcon className="" icon={faGithub} size="3x" /></a></motion.div>
                    </div>
                    </div>
    );
}