import React from "react";
import './Forecast.css';
import styled, { keyframes } from 'styled-components';
import {bounceInLeft, bounceInRight} from "react-animations"
import ScrollAnimation from 'react-animate-on-scroll';;



function Forecast(props){
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

            <div className="temps" style={{backgroundColor:props.forecast.color}}>
                {props.forecast.min_temp}&#176; - {props.forecast.max_temp}&#176;
                <div className="date">
                    {props.forecast.forecast_date}
                </div>
                <div className="desc">
                    {props.forecast.desc}
                </div>
            </div>
        </Bounce>
    )
}

export default Forecast;