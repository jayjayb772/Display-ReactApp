import React from 'react';
import './App.css';
import {Col, Row} from "react-flexbox-grid";
import CtaBox from "../main/components/CtaBox/CtaBox";
import { bounceInRight } from 'react-animations'
import Background from '../resources/bg-img.png';
import WeatherBox from "../main/components/WeatherBox/WeatherBox";
import CurTempBlock from "../main/components/TimeBlock/TimeBlock";
import DiscordBox from "../main/components/DiscordBox/DiscordBox";
let num = 5

function App() {

    return (
        <div className="App bg" >
            <div className="MainBox">
                <Row middle="xs" center="xs" around="xs" className="TopBox-head">
                    <Col xs={num} className="quadrant-left" >
                        <div className="CTA">
                            Montrose
                        </div>
                    </Col>
                    <Col xs={num} className="quadrant-right">
                        <div className="CTA">
                            Fullerton
                        </div>
                    </Col>
                </Row>
                <Row middle="xs" center="xs" around="xs" className="TopBox">
                    <Col xs={num} className="quadrant-left" >
                        <div className="CTA">
                            <CtaBox stop="Montrose" color="Brown"/>
                        </div>
                    </Col>
                    <Col xs={num} className="quadrant-right">
                        <div className="CTA">
                            <CtaBox stop="Fullerton" color="Red"/>
                        </div>
                    </Col>
                </Row>
                <Row middle="xs" center="xs" around="xs" className="BottomBox-head">
                    <Col xs={num} className="quadrant-left">
                        <div className="Weather">
                            Chicago Forecast
                        </div>
                    </Col>
                    <Col xs={num} className="quadrant-right">
                        <div className="Discord">
                            Discord Messages
                        </div>
                    </Col>
                </Row>
                <Row middle="xs" center="xs" around="xs" className="BottomBox">
                    <Col xs={num} className="quadrant-left">
                        <div className="Weather">
                            <WeatherBox city="Chicago" state="Illinois"/>
                        </div>
                    </Col>
                    <Col xs={num} className="quadrant-right">
                        <div className="Discord">
                            <DiscordBox/>
                        </div>
                    </Col>
                </Row>
                <Row middle="xs" center="xs" around="xs" className="TimeBlock">
                    <Col>
                        <div className="TimeBlock">
                            <TimeBlock/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default App;
