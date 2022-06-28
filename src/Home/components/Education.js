import React, {Component } from "react";
import './Education.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Education(){
    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
      });

      const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "+100%" },
      }

    return(
        <div id="education" className="Global-FullScreen ">
                        <div className="Global-WaveBottomGreen">
             <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
             </svg>
            </div>
            <motion.div ref={titleRef} animate={titleInView ? "open" : "closed"} variants={variants} transition={{ duration: 1.5 }}> 
            <div className="EducationWrapper"> 
            <div className="EducationDescWrapper"> 
            <motion.h2 whileHover={{scale: 1.1}} className="EducationSubTitle"> Education </motion.h2>
            <p className="EducationDesc"> I graduated from the University of Plymouth with a 2:1 in 2020; after studying Computing & Games Development. After working for a year; I returned to my academic studies and I am currently undertaking a part time Computer Science Masters at Staffordshire University.
            I am currently looking for software engineering opportunities in the UK. </p>
            </div>
            <div> 
            <motion.h1 whileHover={{scale: 1.1}} className="EducationTitle"> Relentlessly <p className="Global-Underline"> curious. </p> </motion.h1>
            </div>
            </div>
            </motion.div>
        </div>
    );
}

