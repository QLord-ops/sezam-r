import { useState } from 'react';
import s from './accordion.module.scss';
import { questions } from '../../data/index.data.js';
import { Container } from 'react-bootstrap';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className={s.accordion} style={{ backgroundColor: 'rgb(32, 35, 42)' }}>
            <Container>
                {questions.map((item, index) => (
                    <div
                        key={index}
                        className={`${s.item} ${activeIndex === index ? s.active : ''}`}
                        onClick={() => handleAccordionClick(index)}
                    >
                        <div className={s.question}>{item.question}</div>
                        {activeIndex === index && <div className={s.answer}>{item.answer}</div>}
                        <div className={s.arrow}>&#x25BC;</div>
                        <div className={s.border}>
                            <div className={`${s.borderTop} ${activeIndex === index ? s.activeBorder : ''}`} />
                            <div className={`${s.borderBottom} ${activeIndex === index ? s.activeBorder : ''}`} />
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default Accordion;