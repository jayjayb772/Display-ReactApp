import React from "react";
import './Train.css';

function Train(trainInfo){
    console.log("HELLO")
    console.log(trainInfo)
    return (
            <div className="train-line" style={{backgroundColor:trainInfo.trainInfo.colorHex}}>
                {trainInfo.trainInfo.color} Line Train
                <div className="dest">
                    {trainInfo.trainInfo.dest.substring(15)}
                </div>
                <div className="eta">
                    {trainInfo.trainInfo.eta}
                </div>
            </div>
    )
}

export default Train;