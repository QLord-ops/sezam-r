import React from 'react';
import s from "../MetalDoors/MetalDoors.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "../../Components/Slider/Slider.jsx";

const forgedProducts = [
    {
        image: 'https://sezam-kharkiv.com.ua/images/kovani/kovani.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/kovani/kovani2.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/kovani/kovani3.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/kovani/kovani4.jpeg'
    },
    {
        image: 'https://sezam-kharkiv.com.ua/images/kovani/kovani5.jpeg'
    },
]

const ForgedProducts = () => {
    return (
        <div className={s.toBuyers}>
            <Container>
                <Row>
                    <Col xs="12" lg="6">
                        <Slider slides={forgedProducts}/>
                    </Col>
                    <Col xs="12" lg="6" style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                        <h1>Ми пропонуємо унікальну колекцію кованих виробів, виготовлених вручну з високоякісних матеріалів. Наш асортимент включає ворота, огорожі, решітки, сходи та інші вироби. Ми також можемо розробити ковані вироби за індивідуальним проектом. Наші вироби підкреслять ваш стиль та нададуть елегантності вашому простору. Звертайтеся до нас для детальної інформації та підбору виробів.</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ForgedProducts;