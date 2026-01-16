import React from "react";
import Slides from "../../../atomics/molecules/Slides/Slides";

export default function Somos()
{
    const imagenSlide = `${process.env.PUBLIC_URL}/images/S4.png`;

    return(
        <>
            <Slides imagen = {imagenSlide} />
            <div className="container contacto-main">
                <div className="row">
                    <div className="col-sm-7 contacto-titles">
                        <h3>ENVÍANOS UN MENSAJE</h3>
                        <form className="row">
                            <div className="col-sm-5">
                                <div className="form-group">
                                    <label for="inputNombre"></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg inputs"
                                        id="inputNombre"
                                        name="nombre"
                                        formControlName="nombre"
                                        aria-describedby="nombreHelp"
                                        placeholder="Nombre"
                                        
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail"></label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg inputs"
                                        id="inputEmail"
                                        name="email"
                                        formControlName="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Correo electrónico"
                                        
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="inputTelefono"></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg inputs"
                                        id="inputTelefono"
                                        name="telefono"
                                        formControlName="telefono"
                                        aria-describedby="TelefonoHelp"
                                        placeholder="Teléfono"
                                        
                                    />
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="form-group">
                                    <label for="inputMensaje"></label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg inputs contacto-mensaje"
                                        id="inputMensaje"
                                        name="mensaje"
                                        formControlName="mensaje"
                                        aria-describedby="mensajeHelp"
                                        placeholder="Tu mensaje"
                                        
                                    />
                                </div>
                            </div>
                            <div className="form-group d-flex">
                                <button type="submit" className="boton-contacto-enviar">
                                ENVIAR
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-5 contacto-titles">
                        <h3>INFORMACIÓN DE CONTACTO</h3>
                        <p className="contacto-direccion">Calle 5 Mz 6, Miguel Hidalgo 4ta Sección, Tlalpan, CDMX. </p>
                        <hr className="contacto-separador"></hr>
                        <p><strong>Teléfono: </strong>(554) 011 7342</p>
                        <p><strong>Email: </strong>contacto@interiorismo.mx</p>
                        <p><strong>Web: </strong>https://interiorismo.mx</p>
                        <p><strong>Horario: </strong>Lunes – Viernes 9:00 – 23:00</p>
                    </div>
                </div>
            </div>
        </>
        
    );
}