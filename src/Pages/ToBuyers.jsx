import Slider from "../Components/Slider/Slider.jsx";
import {Col, Container, Row} from "react-bootstrap";
import s from './ToBuyers.module.scss'

const images = [
    {
        image: 'https://sezam-kharkiv.com.ua/images/doorImg/door.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/doorImg/door2.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/doorImg/door3.jpeg'
    },

    {
        image: 'https://sezam-kharkiv.com.ua/images/doorImg/door3.jpeg'
    },
]

const ToBuyers = () => {
    return (
        <div className={s.toBuyers}>
            <Container>
                <Row>
                    <Col xs="12" lg="6">
                        <Slider slides={images}/>
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

export default ToBuyers;