import React, {Component } from "react";
import './About.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function About(){
    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
      });
      const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }
    return(
        <div>
        <div className="Global-FullScreen Global-BackgroundColour flexCenter">
            <h1 className="TitleText FadeIn2s"> Hi, I'm <motion.p whileHover={{scale: 1.2}} className=" TitleText Global-Underline"> Jack. </motion.p> </h1>
            <h2 className="SupportingText FadeIn3s"> Software Engineer ✔️ </h2>
            <h2 className="SupportingText FadeIn4s"> Game Developer ✔️ </h2>
            <h2 className="SupportingText FadeIn5s"> Cat Fan ✔️ </h2>
            <div className="Global-WaveBottomGreen">
             <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
             </svg>
            </div>
        </div>

        <div id="about" className="Global-FullScreen Global-altBackgroundColour flexLeft">
            <motion.div ref={titleRef} animate={titleInView ? "open" : "closed"} variants={variants} transition={{ duration: 1.5 }}> 
            <div className="AboutMeWrapper"> 
            <div> 
            <motion.h1 whileHover={{scale: 1.1}} className="AboutMeTitle"> About <p className="Global-Underline"> Me. </p> </motion.h1>
            </div>
            <div className="AboutMeDescWrapper"> 
            <motion.h2 whileHover={{scale: 1.1}} className="AboutMeSubTitle"> A graduate with a desire to learn.</motion.h2>
            <p className="AboutMeDesc"> Hi, I'm Jack and I enjoy making life easier. My journey with programming began long ago when I tried making tile based games in an editor I can barely remember. Since then, I've worked with:</p>
            <ul className="AboutMeListWrapper">
              <li className="AboutMeList"> C# </li>
              <li className="AboutMeList"> Java </li>
              <li className="AboutMeList"> Matlab </li>
              <li className="AboutMeList"> HTML/CSS </li>
              <li className="AboutMeList"> Unity Engine </li>
              <li className="AboutMeList"> Python </li>
              <li className="AboutMeList"> C++ </li>
              <li className="AboutMeList"> React/React Native </li>
              <li className="AboutMeList"> Oracle SQL </li>
            </ul>
            <p className="AboutMeDesc"> Curious about my work? See my <a className="AboutMe-ProjectsLink" href="#projects"> projects </a> here </p>
            </div>
            </div>
            </motion.div>
            <div className="Global-WaveBottomPale">
             <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
             </svg>
            </div>
        </div>
        </div>
        
    );
}