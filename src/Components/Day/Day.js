import React from 'react';
import classes from './Day.css';

const day = (props) => {
    return (
        <div className={classes.Day}>
            <h3>{(props.time)}</h3>
            <span id="icon" > <img alt ="img" src = {`http://openweathermap.org/img/w/${props.iconId}.png`}/></span>
            <h4><span >{props.temp}</span><span >°C</span></h4>
        </div>
    );
}

export default day;