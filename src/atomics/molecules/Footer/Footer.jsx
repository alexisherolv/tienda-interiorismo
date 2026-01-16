import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <div>
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-sm-4 texto-footer">
                            <p className="text-uppercase"><strong>INTERIORISMO 2026</strong> | TODOS LOS DERECHOS RESERVADOS</p>
                            <p>POWERED BY: <strong>ALEXIS HERNÁNDEZ</strong></p>
                        </div>
                        <div className="col-sm-2 texto-footer">
                            <p className="text-uppercase">TIENDA EN LÍNEA</p>
                        </div>
                        <div className="col-sm-3 texto-footer">
                            <p className="text-uppercase">POLÍTICA DE PRIVACIDAD</p>
                        </div>
                        <div className="col-sm-2 texto-footer">
                            <p className="text-uppercase">TÉRMINOS Y CONDICIONES</p>
                        </div>
                        <div className="col-sm-1 iconos-footer">
                            <img src={process.env.PUBLIC_URL + '/images/facebook.svg'} className = "iconos-footer-redes" width="20" height="20" alt="..."/>
                            <img src={process.env.PUBLIC_URL + '/images/instagram.svg'} className = "iconos-footer-redes" width="20" height="20" alt="..."/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;