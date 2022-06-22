import React, {Component } from "react";
import './ContactMe.css';
import TextField from '@mui/material/TextField'
export default function ContactMe(){
    return(
        <div className="FullScreen">
            <h1> Fancy a chat? </h1>
            <TextField className="" id="outlined-basic" label="Your Name" variant="standard" />
        </div>
    );
}