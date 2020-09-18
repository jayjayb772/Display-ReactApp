import React, {useEffect, useState} from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import "./TimeBlock.css"

function TimeBlock(props){
    return (
        <div>
        <Moment format="h:mma" interval={1000} tz="America/Chicago">
            {Date().toLocaleString()}
        </Moment>
            <br/>
            <Moment format="MMMM Do YYYY" interval={1000} tz="America/Chicago">
                {Date().toLocaleString()}
            </Moment>
        </div>
    )
}

export default TimeBlock