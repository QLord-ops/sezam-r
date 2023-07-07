import React from 'react';
import {Col, Container} from "react-bootstrap";
import s from "./contacts.module.scss"
import {Link} from "react-router-dom";


const Contacts = () => {
    return (
        <section className={s.contacts}>
            <Container>
                <Col>
                    <div className={s.contacts__box}>
                        <div className={s.contacts__box_contacts}>
                            <div className={s.contacts__box_img}>
                                <img src="http://sezam-kharkiv.com.ua/assets/Images/pic/w-bar-call.svg" alt="Контакт"/>
                            </div>
                            <div className={s.contacts__wrapper}>
                                <Link className={s.contacts__tel} to="tel:+380677527969">+38(067)-752-79-69</Link>
                                <Link className={s.contacts__tel} to="tel:+380953229283">+38(095)-322-92-83</Link>
                            </div>
                        </div>
                        <div className={s.contacts__box_about}>
                            <div className={s.contacts__box_address}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                    <path
                                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                </svg>
                                <address className={s.contacts__address}>м. Харків, вул. Пушкінська 56</address>
                            </div>
                            <div className={s.contacts__box_img2}>
                                <img src="https://sezam-kharkiv.com.ua/assets/Images/pic/email.svg" alt=""/>
                                <Link className={s.contacts__mail} to="mailto:sezam95@ukr.net">sezam95@ukr.net</Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Container>
        </section>
    )
        ;
};

export default Contacts;