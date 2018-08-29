import React from 'react';
import classes from './Toolbar.css';
import Logo from '../Logo/Logo';
import Hamburger from '../UI/Hamburger/Hamburger';

const Toolbar = (props) =>  (
    <header className = {classes.Toolbar}>
        <Logo/>
        <Hamburger clicked = {props.clicked}/>
    </header> 
) 
export default Toolbar;