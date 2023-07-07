import { useState } from 'react';
import s from './accordion.module.scss';
import { questions } from '../../data/index.data.js';
import { Container } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className={s.accordion} style={{ backgroundColor: 'rgb(32, 35, 42)' }}>
            <Container>
                {questions.map((item) => (
                    <div
                        key={item.id}
                        className={`${s.item} ${activeIndex === item.id ? s.active : ''}`}
                        onClick={() => handleAccordionClick(item.id)}
                    >
                        <div className={s.question}>{item.question}</div>

                        {activeIndex === item.id && <div className={s.answer}>
                            {item.id === 1 && (

                                    <Link to={item.link}>Звʼяжіться </Link>

                            )}
                            {item.answer} </div>}
                        <div className={s.arrow}>&#x25BC;</div>
                        <div className={s.border}>
                            <div className={`${s.borderTop} ${activeIndex === item.id ? s.activeBorder : ''}`} />
                            <div className={`${s.borderBottom} ${activeIndex === item.id ? s.activeBorder : ''}`} />
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default Accordion;