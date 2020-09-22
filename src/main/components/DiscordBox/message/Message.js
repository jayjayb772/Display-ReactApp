import React from "react";
import './Message.css';
import Moment from "react-moment";

function Message(props){
    console.log("HELLO from message")
    return (
            <div className="message">
                "{props.message}"
                <div className="from">
                    - {props.from}
                    <br/>
                    <Moment format="h:mm:ssa" interval={1000} tz="America/Chicago"/>
                    <Moment format="MMMM Do YYYY" interval={1000} tz="America/Chicago"/>
                </div>
            </div>
    )
}

export default Message;