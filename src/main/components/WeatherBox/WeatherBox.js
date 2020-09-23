import React, {useEffect, useState} from "react";
import Forecast from "./forecast/Forecast";
import {debugLog} from "../../util/debugLog.js";


function WeatherBox(props) {
    const [forecasts, setForecasts] = useState([])
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        function doStuff() {
            let url = `${process.env.REACT_APP_ORCHURL}/weather/forecast-week?city=${props.city}&state=${props.state}`
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setForecasts([]);
                    setIsLoaded(true)
                    forecasts.push(data)
                    setForecasts(() => data);

                })
        };
        doStuff();
        const interval = setInterval(() => {
            setError("")
            doStuff();
        }, 60000*60);
        return () => clearInterval(interval);

    }, [])
    if (error !== "") {
        debugLog("Error in weather box", true)
        return <div className="Error">{error}</div>
    } else {
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {forecasts.map(t => (
                        <Forecast key={t.forecast_date} forecast={t} dir={props.dir}/>
                    ))}
                </div>
            );
        }
    }
}


export default WeatherBox;
