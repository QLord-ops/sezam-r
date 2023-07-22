import Slider from "../../Components/Slider/Slider.jsx";
import {Col, Container, Row} from "react-bootstrap";
import s from './MetalDoors.module.scss'

const metalDoors = [
    {
        image: 'https://sezam-kharkiv.com.ua/images/doorImg/door.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/doorImg/door2.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/doorImg/door3.jpeg'
    },
    
]

const MetalDoors = () => {
    return (
        <div className={s.toBuyers}>
            <Container>
                <Row>
                    <Col xs="12" lg="6">
                        <Slider slides={metalDoors}/>
                    </Col>
                    <Col xs="12" lg="6" style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                        <h1>
                            Наша компанія спеціалізується на виробництві металевих дверей високої якості. Ми пропонуємо широкий вибір моделей, включаючи вхідні двері, протипожежні двері і двері на потайних петлях. Наші двері надійні, безпечні, мають високу шумоізоляцію і естетичне оформлення. Вони виготовляються з високоякісних матеріалів і відповідають найвищим стандартам якості. Ми також пропонуємо індивідуальне замовлення, професійне обслуговування і гнучку систему цін. Звертайтеся до нас для отримання консультації та допомоги у виборі ідеальних металевих дверей для вашого об'єкта
                        </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MetalDoors;