import s  from './navbar.module.scss'
import {NavLink} from "react-router-dom";

import BurgerMenu from "./burger/BurgerMenu.jsx";
import NavLinkMenu from "./NavLinkMenu/NavLinkMenu.jsx";

const NavBar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navbar__logo}>
                <NavLink to="/">
                    <img src="http://sezam-kharkiv.com.ua/images/pic/sezam-logo.jpg" alt=""/>
                </NavLink>
            </div>
            <NavLinkMenu />
            <BurgerMenu/>

        </nav>
    );
};

export default NavBar;