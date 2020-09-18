import React, {useEffect, useState} from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import "./TimeBlock.css"

function TimeBlock(props){
    let [curTime, setCurTime] = useState(Date().toLocaleString())

    useEffect(() => {
        function update() {
            setCurTime(Date().toLocaleString())
        };
        update();
        const interval = setInterval(() => {
            update()
        }, 1000);
        return () => clearInterval(interval);

    }, [])

    return (
        <div>
        <Moment format="h:mm:ssa" interval={1000} tz="America/Chicago" date={curTime}/>
            <br/>
            <Moment format="MMMM Do YYYY" interval={1000} tz="America/Chicago" date={curTime}/>
        </div>
    )
}

export default TimeBlock