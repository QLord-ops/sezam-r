import React from 'react';
import s from "../MetalDoors/MetalDoors.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "../../Components/Slider/Slider.jsx";

const interiorDoors = [
    {
        image: 'https://sezam-kharkiv.com.ua/images/dveri/dveri.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/dveri/dveri2.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/dveri/dveri3.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/dveri/dveri4.jpeg'
    },
    {
        image: 'https://sezam-kharkiv.com.ua/images/dveri/dveri5.jpeg'
    },
]


const InteriorDoors = () => {
    return (
        <div className={s.toBuyers}>
            <Container>
                <Row>
                    <Col xs="12" lg="6">
                        <Slider slides={interiorDoors}/>
                    </Col>
                    <Col xs="12" lg="6" style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                        <h1>Наші міжкімнатні двері з МДФ - це стильні, міцні і довговічні вироби. Вони мають естетичну привабливість, високу міцність і простоту обслуговування. Ми пропонуємо широкий вибір дизайнів і кольорів МДФ. Звертайтеся до нас для отримання більш детальної інформації і оформлення замовлення.</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default InteriorDoors;