import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Wrapper/Wrapper';
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => {

    return (
        <Aux>
            <BackDrop show = {props.show} clicked = {props.disableModal} />
            <div 
            className = {classes.Modal}
            style = {{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' ,
                opacity : props.show ? '1' : '0'
            }}>
                <p style ={{textAlign :"center"}}>WHERE ARE YOU?</p>
                <form action="/">
                <input onChange = {props.cityName}type="text" id="cityName"  placeholder="Search..."/>
                </form>
                <button onClick = {props.click}>SEARCH</button>
            </div>
        </Aux>
    )
};

export default modal;