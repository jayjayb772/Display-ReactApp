import React from "react";
import './Train.css';
import styled, { keyframes } from 'styled-components';
import {bounceInLeft, bounceOutRight} from "react-animations"
import ScrollAnimation from 'react-animate-on-scroll';;

const Bounce = styled.div`animation: 4s ${keyframes`${bounceInLeft}`} ease-in`;

function Train(trainInfo){
    console.log("HELLO")
    console.log(trainInfo)
    return (
        <Bounce>

            <div className="train-line" style={{backgroundColor:trainInfo.trainInfo.colorHex}}>
                {trainInfo.trainInfo.color} Line Train
                <div className="dest">
                    {trainInfo.trainInfo.dest.substring(15)}
                </div>
                <div className="eta">
                    {trainInfo.trainInfo.eta}
                </div>
            </div>
        </Bounce>
    )
}

export default Train;