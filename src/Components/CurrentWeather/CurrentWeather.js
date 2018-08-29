import React from 'react';
import classes from './CurrentWeather.css';
import Aux from '../../hoc/Wrapper/Wrapper';

const currentWeather = (props) => {
    // let weather = <p>ENTER CITY!!!</p>;
    // if(this.state.weatherDescription) {
    //     weather = <p>{this.state.weatherDescription}</p>
    // }
    return (
        <Aux>
            <div className={classes.CurrentWeather}>
                <div className = {classes.cityName}>
                    <p>{props.cityName}</p>
                </div>
                <div className = {classes.temp}>
                    <p>{props.temp}°C</p>
                </div>
                <div className = {classes.desc}>
                    <div>
                        {props.desc}
                        {props.iconId ? <img alt = "weather" src = {`http://openweathermap.org/img/w/${props.iconId}.png`} /> : null}
                    </div>
                </div>
            </div>
        </Aux>
    );
};

export default currentWeather;