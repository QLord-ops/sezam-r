import React from 'react';
import {Container} from "react-bootstrap";
import NavBar from "./Navbar/NavBar.jsx";
import s from './header.module.scss'
import {NavLink} from "react-router-dom";
import SocialIcons from "./SocialIcons/SocialIcons.jsx";

const Header = () => {
    return (
        <header className={s.header}>
            <Container>
                <div className={s.header__row}>
                    <div className={s.header__flex}>
                        <div className={s.header__rowInfo}>
                            <div className={s.header__rowInfo__box}>
                                <img src="http://sezam-kharkiv.com.ua/images/pic/wall-clock.svg" alt="Час роботи"/>
                                <p>ПН-ПТ: 10-18:00</p>
                            </div>
                            <div className={s.header__rowInfo__box}>
                                <SocialIcons />
                            </div>
                            <div className={s.header__rowInfo__box}>
                                <img src="http://sezam-kharkiv.com.ua/assets/Images/pic/w-bar-call.svg" alt="Контакт"/>
                                <div className="d-flex flex-column">
                                    <NavLink to="tel:380677527969">+38(067)-752-79-69</NavLink>
                                    <NavLink to="tel:380953229283">+38(095)-322-92-83</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavBar/>
                </div>
            </Container>
        </header>
    );
};

export default Header;