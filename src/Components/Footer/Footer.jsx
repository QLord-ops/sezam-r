import s from './footer.module.scss'
import {Col, Container, Row} from "react-bootstrap";
import NavLinkMenu from "../Header/Navbar/NavLinkMenu/NavLinkMenu.jsx";
import SocialIcons from "../Header/SocialIcons/SocialIcons.jsx";
import {Link, NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <Row style={{marginTop: '50px'}}>
                    <Col>
                        <div className={s.footer__image}>
                            <NavLink to="/">
                                <img src="http://sezam-kharkiv.com.ua/images/pic/sezam-logo.png" alt="лого"/>
                            </NavLink>
                        </div>
                        <div className={s.footer__contacts}>
                            <address>м. Харків, вул. Пушкінська 56</address>
                            <Link to="tel:+380677527969">+38(067)-752-79-69</Link>
                            <Link to="tel:+380953229283">+38 (095)-322-92-83</Link>
                            <Link to="mailto:sezam95@ukr.net">sezam95@ukr.net</Link>
                        </div>
                    </Col>
                    <Col>
                        <div className={s.footer__menu}>
                            <h3>Меню</h3>
                            <NavLinkMenu showHeaderItem={false}/>
                        </div>
                    </Col>
                    <Col>
                        <div className={s.footer__menu__link}>
                            <h4>Ми в соціальних мережах</h4>
                            <SocialIcons/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;