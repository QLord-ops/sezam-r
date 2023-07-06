import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Slider from "../../Components/Slider/Slider.jsx";
import s from "../MetalDoors/MetalDoors.module.scss"

const automaticGates = [
    {
        image : "https://sezam-kharkiv.com.ua/images/vorota/vorota1.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/vorota/vorota2.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/vorota/vorota3.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/vorota/vorota4.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/vorota/vorota5.jpeg"
    }
]

const AutomaticGates = () => {
    return (
        <div className={s.toBuyers}>
            <Container>
                <Row>
                    <Col xs="12" lg="6">
                        <Slider slides={automaticGates}/>
                    </Col>
                    <Col xs="12" lg="6" style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                        <h1>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A error impedit, molestias perferendis provident veniam. Enim eum in maiores modi quo repellendus, repudiandae soluta vel.
                        </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AutomaticGates;