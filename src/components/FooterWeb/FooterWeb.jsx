import React from "react";
import "./FooterWeb.css";

const FooterWeb = () => {
    return (
        <footer className="footer-container">
            <div>
                <p className="footer-p">&copy; 2023 ToDoList. Todos los derechos reservados.</p>
                <span className="footer-p">Desarrollado por: </span>
            </div>
            <div className="footer-contact">
                <a className="footer-a" href="https://github.com/mariajorrat" target="_blank">
                    Maria Jorrat
                </a>
                <a className="footer-a" href="https://github.com/MatiasVill" target="_blank">
                    Matias Villosio
                </a>
                <a className="footer-a" href="https://github.com/matias-estanqueiro" target="_blank">
                    Matias A. Estanqueiro
                </a>
            </div>
        </footer>
    );
};

export default FooterWeb;
