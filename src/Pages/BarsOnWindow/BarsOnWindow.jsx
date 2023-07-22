import React from 'react';
import s from "../MetalDoors/MetalDoors.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "../../Components/Slider/Slider.jsx";

const barsOnWindow = [
    {
        image : "https://sezam-kharkiv.com.ua/images/gratuOkna/gratu.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/gratuOkna/gratu2.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/gratuOkna/gratu3.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/gratuOkna/gratu4.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/gratuOkna/gratu5.jpeg"
    }
]

const BarsOnWindow = () => {
    return (
            <div className={s.toBuyers}>
                <Container>
                    <Row>
                        <Col xs="12" lg="6">
                            <Slider slides={barsOnWindow}/>
                        </Col>
                        <Col xs="12" lg="6" style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                            <h1>Наші ґрати на вікна - надійне рішення для захисту вашого дому чи офісу. Вони міцні, довговічні і перешкоджають незаконному доступу. Є широкий вибір дизайнів і матеріалів. Легкі в установці і мають зручний механізм відкривання. Забезпечують безпеку, вентиляцію і приватність. Команда професіоналів готова надати консультацію і оформити замовлення.</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
};

export default BarsOnWindow;