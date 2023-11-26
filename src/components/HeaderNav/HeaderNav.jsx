import React from "react";
import "./HeaderNav.css";

const HeaderNav = () => {
    return (
        <header className="header-container">
            <h1 className="header-title">ToDoList</h1>
            <nav className="header-nav">
                <ul className="header-ul">
                    <li className="header-li">
                        <a className="header-a" href="/">
                            Inicio
                        </a>
                    </li>
                    <li className="header-li">
                        <a className="header-a" href="/acerca">
                            Acerca de
                        </a>
                    </li>
                    <li className="header-li">
                        <a className="header-a" href="/contacto">
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderNav;
