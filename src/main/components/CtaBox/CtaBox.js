import React, {useEffect, useState} from "react";
import Train from "./train/Train";


function CtaBox(){
    const [trains, setTrains] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
            fetch(`http://localhost:8080/cta/train-times?name=Belmont&color=Blue`)
                .then(res=>res.json())
                .then(data=>{
                console.log("here")
                console.log(data)
                let ex = []
                ex.push(data["Train 1"]);
                    if(data["Train 3"] !== undefined){
                        ex.push(data["Train 3"]);
                    }
                    if(data["Train 2"] !== undefined){
                        ex.push(data["Train 2"]);
                    }
                    if(data["Train 4"] !== undefined){
                        ex.push(data["Train 4"]);
                    }
                setTrains(ex);
                setIsLoaded(true)
            })

        const interval = setInterval(() => {
            console.log('This will run every minute!');
        }, 60000);
        return () => clearInterval(interval);

    }, [])

   if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div>
                {console.log("IN DIV")}
                {trains.map(t =>(
                    <Train key={t.arrTime} trainInfo={t}/>
                ))}
            </div>
        );
    }
}


export default CtaBox;