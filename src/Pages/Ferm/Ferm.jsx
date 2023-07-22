import React from 'react';
import s from "../MetalDoors/MetalDoors.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "../../Components/Slider/Slider.jsx";

const ferm = [
    {
        image : "https://sezam-kharkiv.com.ua/images/ferma/ferma.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/ferma/ferma2.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/ferma/ferma3.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/ferma/ferma4.jpeg"
    },
    {
        image : "https://sezam-kharkiv.com.ua/images/ferma/ferma5.jpeg"
    }
]

const Ferm = () => {
    return (
        <div className={s.toBuyers}>
            <Container>
                <Row>
                    <Col xs="12" lg="6">
                        <Slider slides={ferm}/>
                    </Col>
                    <Col xs="12" lg="6" style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                        <h1>Ми пропонуємо металеві ферми для захисту об'єкта від погодних умов. Вони мають міцну конструкцію і можуть бути виготовлені в різних розмірах і формах. Металеві ферми забезпечують захист від дощу, снігу, вітру і сонячного випромінювання. Ми надаємо індивідуальні рішення, професійну установку і обслуговування. Зв'яжіться з нами для отримання додаткової інформації.</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Ferm;