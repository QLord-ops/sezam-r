import React from 'react';
import NavLinkMenu from "../NavLinkMenu/NavLinkMenu.jsx";
import './menu.scss'

const Menu = ({isOpen}) => {
    return (
        <div className={`menu ${isOpen ? 'open' : '' }`}>
            <NavLinkMenu />
        </div>
    );
};

export default Menu;