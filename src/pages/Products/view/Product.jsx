import React, { useState, useEffect } from "react";
import Slides from "../../../atomics/molecules/Slides/Slides";
import { BrowserRouter as Router,
    useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { getProductById } from '../services/products';

export default function(){
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
    const { addItem } = useCart();

     const imagenSlide = `${process.env.PUBLIC_URL}/images/minislide.png`;

    useEffect(function () {
        getProductById(productId)
        .then(data => {
            setProduct(data);
        })
        .catch(() => {
            alert('No se pudo consultar la información de los productos');
        });
    }, []);

    var formatterPeso = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    })

    return product === null ? (
        <>
            <div className="productos-view">
                <Slides imagen={imagenSlide} />
                <h1>Cargando...</h1>
            </div>
        </>
      ) : (
        <>
            <div className="productos-view">
                <Slides imagen={imagenSlide} />

                <section className="ver-producto">
                    <div className="container-fluid">
                    <div className="row align-items-start">
                        
                        {/* Imagen */}
                        <div className="col-12 col-md-6">
                        <img
                            src={product?.fotos?.[0]}
                            className="img-fluid"
                            alt={product?.nombre}
                        />
                        </div>

                        {/* Información */}
                        <div className="col-12 col-md-6 col-lg-5">
                        <p className="producto-sku">{product?.sku}</p>

                        <h1 className="producto-titulo">{product?.nombre}</h1>

                        <p className="producto-descripcion">
                            {product?.descripcion}
                        </p>

                        <p className="producto-precio">
                            {formatterPeso.format(product?.price)}
                        </p>

                        {/* Acciones */}
                        <div className="d-flex align-items-center gap-3 botones-compra">
                            <Link to="/shopping-cart">
                                <button
                                    type="button"
                                    className="boton-addtocart"
                                    onClick={() => addItem({ ...product })}
                                >
                                    AGREGAR AL CARRITO
                                </button>
                            </Link>

                            <button
                                type="button"
                                className="boton-wish"
                                aria-label="Agregar a favoritos"
                            >
                                <span className="icon" />
                            </button>
                        </div>
                        </div>
                    </div>

                    {/* Productos relacionados */}
                    <div className="related-products mt-5">
                        {/* aquí irán */}
                    </div>
                    </div>
                </section>
            </div>
        </>
    );
}