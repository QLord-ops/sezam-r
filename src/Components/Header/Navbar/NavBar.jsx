import s  from './navbar.module.scss'
import {NavLink} from "react-router-dom";
import {links} from "../../../data/index.data.js";

const NavBar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navbar__logo}>
                <NavLink to="/">
                    <img src="http://sezam-kharkiv.com.ua/images/pic/sezam-logo.jpg" alt=""/>
                </NavLink>
            </div>
            <ul className={s.navbar__menu}>
                {
                    links.map((link)=> {
                        return <li key={link.id}>
                            <NavLink to={link.to} activeClassName={s.active}>{link.name}</NavLink>
                        </li>
                    })
                }
            </ul>
        </nav>
    );
};

export default NavBar;