import React from 'react';
import Logo from '../../Assets/logo1.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className = {classes.Logo}>
        <img src = {Logo} alt = 'MyBurgerApp'/>
    </div>
);

export default logo;