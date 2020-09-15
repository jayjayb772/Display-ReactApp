import React, {useEffect, useState} from "react";
import Train from "./train/Train";


function CtaBox() {
    const [trains, setTrains] = useState([])
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        async function doStuff() {
            let a = `${process.env.REACT_APP_ORCHURL}/cta/train-times`
            fetch(a)
                .then(res=> res.json())
                .then(data => {
                    console.log("here")
                    console.log(data)
                    let ex = []
                    if (data["Train 1"] === undefined) {
                        setError("No trains now")
                    } else {
                        ex.push(data["Train 1"]);
                        if (data["Train 2"] !== undefined) {
                            ex.push(data["Train 2"]);
                        }
                        if (data["Train 3"] !== undefined) {
                            ex.push(data["Train 3"]);
                        }
                        if (data["Train 4"] !== undefined) {
                            ex.push(data["Train 4"]);
                        }
                        setTrains(ex);
                        setIsLoaded(true)
                    }
                })
        };
        doStuff();
        const interval = setInterval(() => {
            setError("")
            setTrains([]);
            setIsLoaded(false)
            doStuff();
            console.log('This will run every minute!');
        }, 60000);
        return () => clearInterval(interval);

    }, [])
    if (error !== "") {
        return <div className="Error">{error}</div>
    } else {
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {console.log("IN DIV")}
                    {trains.map(t => (
                        <Train key={t.arrTime} trainInfo={t}/>
                    ))}
                </div>
            );
        }
    }
}


export default CtaBox;
