import React from 'react';
import './App.css';
import {Col, Row} from "react-flexbox-grid";
import CtaBox from "../main/components/CtaBox/CtaBox";
import { bounceInRight } from 'react-animations'
import Background from '../bg-img.png';
let num = 5

function App() {

    return (
        <div className="App bg" >
            <div className="MainBox">
                <Row middle="xs" center="xs" around="xs" className="TopBox">
                    <Col xs={num} className="quadrant-left CTA" >
                        Montrose
                        <CtaBox stop="Montrose" color="Brown" dir="left"/>
                    </Col>
                    <Col xs={num} className="quadrant-right CTA">
                        Fullerton
                        <CtaBox stop="Fullerton" color="Red" dir="right"/>
                    </Col>
                </Row>
                <Row middle="xs" center="xs" around="xs" className="BottomBox">
                    <Col xs={num} className="quadrant-left CTA">
                        Jackson
                        <CtaBox stop="Jackson" color="Red" dir="left"/>
                    </Col>
                    <Col xs={num} className="quadrant-right CTA">
                        Southport
                        <CtaBox stop="Southport" color="Brown" dir="right"/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default App;
