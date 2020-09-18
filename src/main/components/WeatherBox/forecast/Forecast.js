import React, {useEffect, useState} from "react";
import './Forecast.css';
import styled, {css, keyframes} from 'styled-components';
import {bounceInLeft, bounceInRight, bounceOutLeft, bounceOutRight} from "react-animations"
import ScrollAnimation from 'react-animate-on-scroll';
import Moment from "react-moment";

;



function Forecast(props){
    let direction
    if(props.dir==="left"){
        direction = bounceInLeft;
    }else{
        direction = bounceInRight
    }
    console.log("HELLO")
    console.log(props)
    let [Bounce, setBounce] = useState(styled.div`animation: 4s ${keyframes`${direction}`} ease-in`)
    let [first, setFirst] = useState(true)
    function update() {
        console.log(first)
        if(first === false){
            if(props.dir==="left"){
                direction = bounceOutLeft;
            }else{
                direction = bounceOutRight
            }
            console.log("im here");

            const animation = props =>css`4s ${keyframes`${direction}`} ease-in`
            setBounce(styled.div`animation: ${animation}`)

            //setBounce(styled.div`animation: 4s ${keyframes`${direction}`} ease-in`)
        }

    };
    useEffect(() => {
        const interval = setInterval(() => {
            first = false
            console.log("setting here")
            update()
        }, (60000*60)-4);
        update()
        return () => clearInterval(interval);

    }, [])

    return (
        <Bounce>

            <div className="temps" style={{backgroundColor:props.forecast.color}}>
                {props.forecast.min_temp}&#176; - {props.forecast.max_temp}&#176;
                <div className="date">
                    <Moment format="MMMM Do YYYY" interval={1000} tz="America/Chicago">
                    {props.forecast.forecast_date}
                    </Moment>
                </div>
                <div className="desc">
                    {props.forecast.desc}
                </div>
            </div>
        </Bounce>
    )
}

export default Forecast;