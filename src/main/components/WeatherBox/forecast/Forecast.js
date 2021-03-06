import React, {useEffect, useRef, useState} from "react";
import './Forecast.css';
import styled, {css, keyframes} from 'styled-components';
import {fadeIn, fadeOut} from "react-animations"
import Moment from "react-moment";

;



function Forecast(props){
    let direction
    direction= fadeIn
    let [Bounce, setBounce] = useState(styled.div`animation: 4s ${keyframes`${direction}`} ease-in`)
    //let [first, setFirst] = useState(true)
    const first = useRef(true)
    function update() {
        if(first.current === false){
            direction= fadeOut
            const animation = props =>css`4s ${keyframes`${direction}`} ease-in`
            setBounce(styled.div`animation: ${animation}`)
        }

    };
    useEffect(() => {
        const interval = setInterval(() => {
            first.current = false
            update()
        }, (60000*60)-4);
        update()
        return () => clearInterval(interval);

    }, [])
    let bg;
    if(props.forecast.forecast === "Cloudy"){
        bg = "cloudy"
    }else if(props.forecast.forecast === "Clear"){
        bg = "clear"
    }else if(props.forecast.forecast === "Rain"){
        bg = "rain"
    }else if(props.forecast.forecast === "Snow"){
        bg = "snow"
    }

    return (
        <Bounce>

            <div className={`temps ${bg}`}>
                {props.forecast.min_temp}&#176; - {props.forecast.max_temp}&#176;
                <div className="date">
                    <Moment format="MMMM Do YYYY" interval={1000} tz="America/Chicago">
                    {props.forecast.forecast_date}
                    </Moment>
                </div>
                <div className="desc">
                    {props.forecast.forecast}
                </div>
            </div>
        </Bounce>
    )
}

export default Forecast;