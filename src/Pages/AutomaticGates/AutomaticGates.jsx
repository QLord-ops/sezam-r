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
                            Ми пропонуємо різні варіанти воріт для Вашого об'єкта, включаючи ворота з автоматикою і без неї. Ворота з автоматикою забезпечують зручність і комфорт, використовуючи автоматичні системи відкривання та закривання. Ворота без автоматики підходять для тих, хто віддає перевагу простим рішенням. Ми допоможемо Вам вибрати найбільш підходящий варіант і можемо запропонувати додаткові опції та аксесуари. Звертайтеся до нас, щоб отримати більш детальну інформацію та консультацію щодо воріт для Вашого об'єкта.


                        </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AutomaticGates;