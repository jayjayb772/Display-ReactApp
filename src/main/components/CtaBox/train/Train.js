import React from "react";
import './Train.css';
import styled, { keyframes } from 'styled-components';
import {bounceInLeft, bounceInRight} from "react-animations"
import ScrollAnimation from 'react-animate-on-scroll';;



function Train(props){
    let direction
    if(props.dir==="left"){
        direction = bounceInLeft;
    }else{
        direction = bounceInRight
    }
    const Bounce = styled.div`animation: 4s ${keyframes`${direction}`} ease-in`;
    console.log("HELLO")
    console.log(props)
    return (
        <Bounce>

            <div className="dest" style={{backgroundColor:props.trainInfo.colorHex}}>
                {props.trainInfo.dest.substring(15)}
                <div className="eta">
                    {props.trainInfo.eta}
                </div>
                <div className="train-line">
                    {props.trainInfo.color} Line Train
                </div>
            </div>
        </Bounce>
    )
}

export default Train;