import s from './main.module.scss'
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAward, faLock, faUserPlus} from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.main__bg}>
                <img src="http://sezam-kharkiv.com.ua/images/pic/house.jpeg" alt=""/>
            </div>
            <div className={s.main__inner}>
                <Container>
                    <Row className={s.row}>
                        <Col>
                            <h1>
                                Відчиніть двері до нових можливостей!
                                Індивідуальний стиль, надійність та
                                безпека – ось що ми пропонуємо. Наші
                                двері, вікна та ворота – це гармонійне
                                поєднання якісних матеріалів та
                                сучасного дизайну.
                                Відкрийте для себе
                                зручність та елегантність у кожній
                                деталі.
                                Ми також надаємо послуги з ремонту металевих конструкцій та
                                реставрації лакофарбових покриттів.
                                Виберіть надійність, оберіть
                                комфорт, вибирайте <span style={{color: 'red', zoom: '1.5'}}>«Сезам»</span>
                            </h1>
                        </Col>
                        <Col>
                            <div className={s.main__check}>
                                <div className={s.main__checkBox}>
                                    <FontAwesomeIcon icon={faLock} size="xl" style={{color: "#b02424",}}/>
                                    <p>Наші якість і безпека - Ваші комфорт і душевний спокій!</p>
                                </div>

                                <div className={s.main__checkBox}>
                                    <FontAwesomeIcon icon={faAward} size="2xl" style={{color: "#b02424",}}/>
                                    <p>Більше ніж 27 років на ринку!</p>
                                </div>

                                <div className={s.main__checkBox}>
                                    <FontAwesomeIcon icon={faUserPlus} size="xl" style={{color: "#b02424",}}/>
                                    <p>Більше ніж 10 000 задоволених клієнтів!</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </main>
    );
};

export default Main;