import React from 'react';
import s from "../MetalDoors/MetalDoors.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "../../Components/Slider/Slider.jsx";

const metalWindows = [
    {
        image : "https://sezam-kharkiv.com.ua/images/okna/okna.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/okna/okna2.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/okna/okna3.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/okna/okna4.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/okna/okna5.jpeg"
    }
]

const MetalWindow = () => {
    return (
        <div className={s.toBuyers}>
            <Container>
                <Row>
                    <Col xs="12" lg="6">
                        <Slider slides={metalWindows}/>
                    </Col>
                    <Col xs="12" lg="6" style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                        <h1>Пропонуємо вам металопластикові вікна високої якості з енергоефективністю, звукоізоляцією, безпекою, довговічністю і стильним дизайном. Гарантуємо професійну установку і надаємо гарантію. Зв'яжіться з нами для отримання додаткової інформації.</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MetalWindow;