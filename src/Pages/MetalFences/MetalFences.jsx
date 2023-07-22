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
                        <h1>Ми пропонуємо високоякісні металеві огорожі для безпеки і обмеження доступу на об'єкті. Виготовлені з міцних матеріалів, вони задовольняють вимоги безпеки і мають різні стилі і кольори. Металеві огорожі є міцними, довговічними і стійкими до погодних умов. Ми надаємо професійну установку, сервісне обслуговування і ремонт, а також гарантуємо якість і конкурентні ціни. Звертайтеся до нас для додаткової інформації і консультації.</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MetalFences;