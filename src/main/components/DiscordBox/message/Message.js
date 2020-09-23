import React from "react";
import './Message.css';
import Moment from "react-moment";

function Message(props){
    return (
            <div className="message">
                "{props.message}"
                <div className="from">
                    - {props.from}
                    <div className="time">
                    <br/>
                    <Moment date={props.ts} format="h:mm:ssa" tz="America/Chicago"/>
                    <Moment date={props.ts} format="MMMM Do YYYY" tz="America/Chicago"/>
                    </div>
                </div>
            </div>
    )
}

export default Message;