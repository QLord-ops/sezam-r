import React, {useState} from 'react';
import './burger.scss'
import Menu from "./Menu.jsx";

const BurgerMenu = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>
            <Menu isOpen={isOpen}/>
        </>
    );
};

export default BurgerMenu;