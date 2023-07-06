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
                            <Link className={s.contacts__tel} to="tel:+380677527969">+38(067)-752-79-69</Link>
                            <Link className={s.contacts__tel} to="tel:+380953229283">+38(095)-322-92-83</Link>
                        </div>
                        <div className={s.contacts__box_about}>
                            <address className={s.contacts__address}>м. Харків, вул. Пушкінська 56</address>
                            <Link className={s.contacts__mail} to="mailto:sezam95@ukr.net">sezam95@ukr.net</Link>
                        </div>
                    </div>
                </Col>
            </Container>
        </section>
    );
};

export default Contacts;