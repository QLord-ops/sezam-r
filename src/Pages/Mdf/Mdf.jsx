import React from 'react';
import s from "../MetalDoors/MetalDoors.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "../../Components/Slider/Slider.jsx";

const mdf = [
    {
        image: 'https://sezam-kharkiv.com.ua/images/mdf/mdf.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/mdf/mdf2.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/mdf/mdf3.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/mdf/mdf4.jpeg'
    },
    {
        image: 'https://sezam-kharkiv.com.ua/images/mdf/mdf5.jpeg'
    },
]

const Mdf = () => {
    return (
        <div className={s.toBuyers}>
            <Container>
                <Row>
                    <Col xs="12" lg="6">
                        <Slider slides={mdf}/>
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

export default Mdf;