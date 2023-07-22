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
                        <h1>Наші МДФ фасади - високоякісні панелі з МДФ плит, покритих захисним шаром. Вони стійкі до зовнішніх впливів, мають широкий вибір дизайнів, міцні та довговічні. Ми також пропонуємо індивідуальне замовлення. Наші МДФ фасади нададуть вашим вхідним металевим дверям елегантності, стилю і захисту.</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Mdf;