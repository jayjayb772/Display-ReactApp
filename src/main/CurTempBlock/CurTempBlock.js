import React, {useEffect, useState} from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import "./CurTempBlock.css"
import Forecast from "../components/WeatherBox/forecast/Forecast";

function CurTempBlock(props){
    let [curForecast, setCurForecast] = useState(()=>{
        return []
    })
    const [error, setError] = useState(()=>{return ""});
    const [isLoaded, setIsLoaded] = useState(()=>{return false});
        useEffect(() => {
            function doStuff() {
                let url = `${process.env.REACT_APP_ORCHURL}/weather/forecast-now?city=${props.city}&state=${props.state}`
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        setCurForecast([]);
                        setIsLoaded(true)
                        setCurForecast(data)

                    })
            };
            doStuff();
            const interval = setInterval(() => {
                setError("")
                doStuff();
            }, 60000*5);
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
                        <CurTempComponent weatherInfo={curForecast}/>
                    </div>
                );
            }
        }
    }

export default CurTempBlock