import React from 'react';
import './App.css';
import {Col, Row} from "react-flexbox-grid";
import CtaBox from "../main/components/CtaBox/CtaBox";
import { bounceInRight } from 'react-animations'
import Background from '../bg-img.png';
let num = 5

function App() {

    return (
        <div className="App" >
            <div className="bg">
            <div className="MainBox">
                <Row middle="xs" center="xs" around="xs" className="TopBox">
                    <Col xs={num} className="quadrant-left CTA" >
                        Train Times!
                        <CtaBox/>
                    </Col>
                    <Col xs={num} className="quadrant-right">
                        Box 2
                    </Col>
                </Row>
                <Row middle="xs" center="xs" around="xs" className="BottomBox">
                    <Col xs={num} className="quadrant-left">
                        Box 3
                    </Col>
                    <Col xs={num} className="quadrant-right">
                        Box 4
                    </Col>
                </Row>
            </div>
            </div>
        </div>
    );
}

export default App;
