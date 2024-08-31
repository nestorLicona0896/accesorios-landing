import React from 'react';
import { NavLink } from 'react-router-dom';
import {toggleMenu, toggleMenu2} from '../js/navbar';
import {sendWhatsAppMessage} from "../js/whatsapp";

export const HeaderNav = () => {

    const sendText = () => {
        const message = `Hola, estoy interesado en saber mas acerca de tus servicios`;
        sendWhatsAppMessage(message);
      };

    return (
        <header className="header">
            <div className="logo">
                <img src="../icon2.png" alt="icon2" />
            </div>
            <nav>
                <div className="menu-icon" onClick={toggleMenu}>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink onClick={toggleMenu2} to="/start" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMenu2} to="/catalog" className={({ isActive }) => isActive ? "active" : ""}>Catalogo</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMenu2} to="/services" className={({ isActive }) => isActive ? "active" : ""}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMenu2} to="/about" className={({ isActive }) => isActive ? "active" : ""}>Acerca de</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMenu2} to="/stones" className={({ isActive }) => isActive ? "active" : ""}>Piedras Semipreciosas</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleMenu2} to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contacto</NavLink>
                    </li>
                </ul>
                <ul className='media-links'>
                    <li>
                        <a href="https://www.instagram.com/nardis_accesorios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><img src="../img/instagramlogo.png" alt="instagram logo"></img></a>
                    </li>
                    <li>
                        <button onClick={sendText} type='button'> <img src="../img/whatsapplogo.png" alt="whatsapp logo"></img></button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
