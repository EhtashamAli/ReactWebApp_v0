import React from 'react';
import Aux from '../../hoc/Wrapper/Wrapper';
import classes from './Forcast.css';
import Day from '../../Components/Day/Day';

const forcast = (props) => {

    const day = props.forcast.map(key => {
        return <Day key = {key.id} time = {key.time} temp = {key.temp} iconId = {key.iconId}/>
    });
    return (
        <Aux>
            <div className={classes.Forecast}>
              {day}
            </div>
        </Aux>
    )
};

export default forcast;