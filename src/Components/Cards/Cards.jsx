import {Col, Container, Row} from "react-bootstrap";
import {cards} from "../../data/index.data.js";
import s from './card.module.scss'


const Cards = () => {
    return (
        <section>
            <Container/>
            <div className={s.section__wrapper}>
                <Row className={s.row}>
                    {
                        cards.map((card) => {
                            return <Col key={card.id} xxl={4} sm={6}>
                                <div className={s.card}>
                                    <span>{card.number}</span>
                                    <h4>{card.description}</h4>
                                    <img  src={card.mark} alt=""/>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </div>
        </section>
    );
};

export default Cards;