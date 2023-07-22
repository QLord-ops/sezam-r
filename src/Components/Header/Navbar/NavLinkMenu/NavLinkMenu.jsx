import s from "../navbar.module.scss";
import {links} from "../../../../data/index.data.js";
import {NavLink} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import './navLinkMenu.scss'

const NavLinkMenu = ({ showHeaderItem }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null)

useEffect(() => {
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)){
            setMenuOpen(false)
        }
    }
    document.addEventListener('click', handleClickOutside);

    return () => {
        document.removeEventListener('click', handleClickOutside)
    };
}, []);


    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    }


    return (
        <ul className={`${s.navbar__menu} menuMobile`} ref={menuRef}>
            {links.map((link) => (
                <li key={link.id}>
                    {link.id === 2 ? (
                        <div>
                            { showHeaderItem && (
                            <NavLink
                                to={link.to}
                                onClick={toggleMenu}
                                className={link.disabledLink}

                            >
                                {link.name}
                            </NavLink>
                            )}
                            {isMenuOpen && (
                                <ul className="navbar__submenu" onClick={closeMenu}>
                                    {/* Вставьте здесь ссылки для выпадающего меню */}
                                    <li>
                                        <NavLink to="/metal-doors" onClick={closeMenu}>Металеві двері</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/automatic-gates" onClick={closeMenu}>Металеві ворота з автоматикою і без</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/bars-on-window" onClick={closeMenu}>Ґрати на вікна</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/metal-shutters" onClick={closeMenu}>Захисні металеві жалюзі</NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/ferm" onClick={closeMenu}>Металеві ферми для даху</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/metal-fences" onClick={closeMenu}>Металеві огорожі</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/forged-products" onClick={closeMenu}>Ковані вироби</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/mdf" onClick={closeMenu}>МДФ фасади для дверей</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/interior-doors" onClick={closeMenu}>Міжкімнатні двері</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/metal-windows" onClick={closeMenu}>Металопластикові вікна</NavLink>
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