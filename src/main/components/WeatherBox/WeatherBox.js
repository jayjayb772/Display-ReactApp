import React, {useEffect, useState} from "react";
import Forecast from "./forecast/Forecast";


function WeatherBox(props) {
    const [forecasts, setForecasts] = useState([])
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        function doStuff() {
            let url = `${process.env.REACT_APP_ORCHURL}/weather/forecast-week?city=${props.city}&state=${props.state}`
            console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log("here")
                    console.log(data)
                    setForecasts(data);
                    setIsLoaded(true)

                })
        };
        doStuff();
        const interval = setInterval(() => {
            setError("")
            setForecasts([]);
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
                    {forecasts.map(t => (
                        <Forecast key={t.forecast_date} forecast={t} dir={props.dir}/>
                    ))}
                </div>
            );
        }
    }
}


export default WeatherBox;
