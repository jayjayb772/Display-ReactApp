import React, {useEffect, useState} from "react";
import Stock from "./boxItem/Stock";
import yahooFinance from 'yahoo-finance';




function ItemizedBox(props) {

            return (
                <div>
                    {props.stocks.map(t => (
                        <Stock key={t} stockSybmol={t}/>
                    ))}
                </div>
            );

}


export default ItemizedBox;
