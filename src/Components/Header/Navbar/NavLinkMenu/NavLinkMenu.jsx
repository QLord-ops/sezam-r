import s from "../navbar.module.scss";
import {links} from "../../../../data/index.data.js";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import './navLinkMenu.scss'

const NavLinkMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <ul className={`${s.navbar__menu} menuMobile`}>
            {links.map((link) => (
                <li key={link.id}>
                    {link.id === 2 ? (
                        <div>
                            <NavLink to={link.to} onClick={toggleMenu} className={link.disabledLink}>
                                {link.name}
                            </NavLink>
                            {isMenuOpen && (
                                <ul className="navbar__submenu">
                                    {/* Вставьте здесь ссылки для выпадающего меню */}
                                    <li>
                                        <NavLink to="/metal-doors">Металеві двері</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/automatic-gates">Металеві ворота з автоматикою і без</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/bars-on-window">Ґрати на вікна</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/metal-shutters">Захисні металеві жалюзі</NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/ferm">Металеві ферми для даху</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/metal-fences">Металеві огорожі</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/forged-products">Ковані вироби</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/mdf">МДФ фасади для дверей</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/interior-doors">Міжкімнатні двері</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/metal-windows">Металопластикові вікна</NavLink>
                                    </li>
                                    {/* ... */}
                                </ul>
                            )}
                        </div>
                    ) : (
                        <NavLink to={link.to}>{link.name}</NavLink>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavLinkMenu;