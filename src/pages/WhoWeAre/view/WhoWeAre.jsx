import React from "react";
import Slides from "../../../atomics/molecules/Slides/Slides";
import { Link } from "react-router-dom";

export default function Somos() {
  const imagenSlide = `${process.env.PUBLIC_URL}/images/S3.png`;
  const imagenSomos = `${process.env.PUBLIC_URL}/images/somos.png`;

  return (
    <>
      <Slides imagen={imagenSlide} />

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-6 imagen">
            <img src={imagenSomos} className="img-fluid" alt="Somos Interiorismo México" />
          </div>

          <div className="col-sm-6 texto-somos">
            <h1>Interiorismo México</h1>
            <p>
              Somos una empresa mexicana con expertos que ofrece técnicas para el diseño, decorado
              y construcción a base de resina epóxica. Ofrecemos venta y distribución de mesas de río,
              charolas de servicio, tablas de picar, portavasos y más.
            </p>
            <p>
              Nuestra misión es ser el proveedor más confiable, garantizando los más altos estándares de
              calidad.
            </p>
            <p>
              Nuestra visión es mantenernos en constante actualización para ser la marca preferida de
              nuestros clientes. Comprometidos con la sociedad y el medio ambiente.
            </p>

            <Link to="/all-products">
              <button type="button" className="boton-contacto">
                COMPRAR AHORA
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}