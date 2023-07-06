import React from 'react';
import s from "../MetalDoors/MetalDoors.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "../../Components/Slider/Slider.jsx";

const metalFences = [
    {
        image: 'https://sezam-kharkiv.com.ua/images/ogorozhi/balkon.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/ogorozhi/balkon2.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/ogorozhi/balkon3.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/ogorozhi/balkon4.jpeg'
    },
    {
        image: 'https://sezam-kharkiv.com.ua/images/ogorozhi/balkon5.jpeg'
    },
]

const MetalFences = () => {
    return (
        <div className={s.toBuyers}>
            <Container>
                <Row>
                    <Col xs="12" lg="6">
                        <Slider slides={metalFences}/>
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

export default MetalFences;