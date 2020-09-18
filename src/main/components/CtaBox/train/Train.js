import React, {useEffect, useState} from "react";
import './Train.css';
import styled, {css, keyframes} from 'styled-components';
import {fadeIn, fadeOut} from "react-animations"




function Train(props){
    let direction
    direction= fadeIn;
    let [Bounce, setBounce] = useState(styled.div`animation: 2s ${keyframes`${direction}`}`)
    let [first, setFirst] = useState(true)
    function update() {
        console.log(first)
        if(first === false){
            direction= fadeOut
            console.log("im here");

            const animation = props =>css`4s ${keyframes`${direction} ease-in`}`
            setBounce(styled.div`animation: ${animation}`)

            //setBounce(styled.div`animation: 4s ${keyframes`${direction}`} ease-in`)
        }

    };
    useEffect(() => {
        const interval = setInterval(() => {
           first = false
            console.log("setting here")
            update()
        }, 57000);
        update()
        return () => clearInterval(interval);

    }, [])
    //console.log("HELLO")
    //console.log(props)
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