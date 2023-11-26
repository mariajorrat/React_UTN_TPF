import React from "react";
import "./FooterWeb.css";

const FooterWeb = () => {
    return (
        <footer className="footer-container">
            <p className="footer-p">&copy; 2023 ToDoList. Todos los derechos reservados.</p>
            <span className="footer-p">Desarrollado por: </span>
            <a className="footer-a" href="https://github.com/mariajorrat">
                Maria Jorrat
            </a>
            <a className="footer-a" href="https://github.com/MatiasVill">
                Matias Vill
            </a>
            <a className="footer-a" href="https://github.com/matias-estanqueiro">
                Matias A. Estanqueiro
            </a>
        </footer>
    );
};

export default FooterWeb;
