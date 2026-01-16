import React from "react";
import Slides from "../../../atomics/molecules/Slides/Slides";
import { Link } from "react-router-dom";

export default function Somos() {
  const imagenSlide = `${process.env.PUBLIC_URL}/images/S5.png`;
  const imagenPrincipal = `${process.env.PUBLIC_URL}/images/porta-interiorismo.png`;

  return (
    <>
      <Slides imagen={imagenSlide} />

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-6 imagen">
            <img
              src={imagenPrincipal}
              className="img-fluid"
              alt="Porta Interiorismo"
            />
          </div>

          <div className="col-sm-6 texto">
            <p>Porque el interiorismo ha cambiado</p>
            <h1>Somos estilo y decoración</h1>
            <p>
              En piezas únicas de madera fina mexicana y resina epóxica. Todos
              nuestros muebles y accesorios están elaborados de mezquite,
              parota y resina epóxica.
            </p>

            <Link to="/contact">
              <button type="button" className="boton-contacto">
                CONTÁCTANOS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}