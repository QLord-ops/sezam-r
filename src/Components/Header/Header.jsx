import React from 'react';
import {Container} from "react-bootstrap";
import s from './header.module.scss'

const Header = () => {
    return (
        <header>
            <Container>
                <div className={s.header__row}>
                    <div className="header__row-info"></div>
                </div>
            </Container>
        </header>
    );
};

export default Header;