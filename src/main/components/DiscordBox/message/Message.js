import React from "react";
import './Message.css';
import Moment from "react-moment";

function Message(props){
    console.log("trying to make message")
    console.log(`${props.message}, ${props.from}, ${props.ts}`)
    let img = "no-image";
    let src;
    if(props.data.imageURL !== null){
        img = "image";
        src = props.data.imageUrl

    }

    return (
            <div className="message">
                "{props.message}"
                <div className="from">
                    - {props.from}
                    <div className="time">
                    <br/>
                    <Moment date={props.ts} format="h:mm:ssa" tz="America/Chicago" />
                    <Moment  date={props.ts} format="MMMM Do YYYY" tz="America/Chicago"/>    
                  </div>
                </div>
            </div>
    )
}

export default Message;