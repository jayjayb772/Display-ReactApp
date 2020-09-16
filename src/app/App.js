import React from 'react';
import './App.css';
import {Col, Row} from "react-flexbox-grid";
import CtaBox from "../main/components/CtaBox/CtaBox";
import { bounceInRight } from 'react-animations'
import Background from '../bg-img.png';
import WeatherBox from "../main/components/WeatherBox/WeatherBox";
let num = 5

function App() {

    return (
        <div className="App bg" >
            <div className="MainBox">
                <Row middle="xs" center="xs" around="xs" className="TopBox">
                    <Col xs={num} className="quadrant-left" >
                        <div className="CTA">
                        Montrose
                        <CtaBox stop="Montrose" color="Brown" dir="left"/>
                        </div>

                    </Col>
                    <Col xs={num} className="quadrant-right">
                        <div className="CTA">
                        Fullerton
                        <CtaBox stop="Fullerton" color="Red" dir="right"/>
                        </div>
                    </Col>
                </Row>
                <Row middle="xs" center="xs" around="xs" className="BottomBox">
                    <Col xs={num} className="quadrant-left">
                        <div className="Weather">
                            Chicago Forecast
                            <WeatherBox city="Chicago" state="Illinois" dir="left"/>
                        </div>
                    </Col>
                    <Col xs={num} className="quadrant-right">
                        <div className="CTA">
                        Southport
                        <CtaBox stop="Southport" color="Brown" dir="right"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default App;
