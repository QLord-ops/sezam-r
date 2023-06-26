import React from 'react';
import s from "../navbar.module.scss";
import {links} from "../../../../data/index.data.js";
import {NavLink} from "react-router-dom";

const NavLinkMenu = () => {
    return (
        <ul className={`${s.navbar__menu} menuMobile`}>
            {
                links.map((link)=> {
                    return <li key={link.id}>
                        <NavLink to={link.to}>{link.name}</NavLink>
                    </li>
                })
            }
        </ul>
    );
};

export default NavLinkMenu;