import React from 'react';
import classes from './Hamburger.css';


const hamburger = (props) => (
    <div className = {classes.Container} onClick = {props.clicked}>
        <div></div>
        <div></div>
        <div></div> 
    </div>
)

export default hamburger;