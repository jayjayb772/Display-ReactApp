import React, {useEffect, useState} from "react";
import './Stock.css';
import styled, {css, keyframes} from 'styled-components';
import {fadeIn, fadeOut} from "react-animations"
import yahooFinance from "yahoo-finance";




function Stock(props){
    let [response, setResponse] = useState(async ()=>{
        return await yahooFinance.quote({
            symbol:props.stockSybmol,
            modules: ['summaryDetail', 'price']
        },{proxy:'https://cors-anywhere.herokuapp.com/'});
    })
    function update() {
        setResponse(async (response) => {
            return await yahooFinance.quote({
                symbol: props.stockSybmol,
                modules: ['summaryDetail', 'price']
            }, {proxy: 'https://cors-anywhere.herokuapp.com/'}, function (err, quotes){
                if (err) { throw err; }
                if(quotes[0]){
                    setResponse(response=>quotes[0])
                dir = response.price - response.price.regularMarketPreviousClose;
                if (dir > 0) {
                    //up
                    color = "Green"
                } else {
                    //down
                    color = "Red"
                }

                percentOff = dir / response.price.regularMarketPreviousClose;

                    return (
                        <div className="stock" style={{backgroundColor: color}}>
                            {response.quoteType.shortName} {response.price.regularMarketPrice}
                            <div className="market-open">
                                Market Open {response.price.regularMarketOpen}
                            </div>
                            <div className="good-or-bad">
                                {percentOff}
                            </div>

                        </div>
                    )
            }else{
                    return(
                        null
                    )
                }})
        });
    };
    let color
    let dir
    let percentOff
        const interval = setInterval(() => {
            update()
        }, 56500);

}

export default Stock;