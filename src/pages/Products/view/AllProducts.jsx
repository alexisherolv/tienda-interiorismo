import React, {useEffect, useState} from "react";
import Slides from "../../../atomics/molecules/Slides/Slides";
import Card from "../../../atomics/molecules/Card/Card";

export default function AllProducts(){
    const [products, setProducts] = useState([]);
    const [orden, setOrden] = useState();

    const imagenSlide = `${process.env.PUBLIC_URL}/images/slide-prod2.png`;

    useEffect(function () {
        fetch(`http://localhost:5001/v1/productos/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(function(response) {
            return response.ok ? response.json() : Promise.reject();
        })
        .then(function(data) {
            console.log(Object.values(data));
            setProducts(Object.values(data));
        })
        .catch(function(err) {
            alert("No se pudo consultar la informacion de los productos");
        });
    }, []);

    return (
        <>
            <Slides imagen = {imagenSlide} />
            <section className="container ordenar">
                <h3 className="categoria-p">TODOS LOS PRODUCTOS</h3>
                <div className="container">
                    <div className="row align-items-center border py-2">
                        <div className="col-3">
                            <h5 className="categoria-p2 mb-0">ORDENAR POR:</h5>
                        </div>

                        <div className="col-auto">
                            <div className="dropdown">
                                <button
                                    className="btn btn-primary dropdown-toggle boton-desplegable"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Orden por defecto
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item" id="menor-mayor">
                                        Precio: menor a mayor
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" id="mayor-menor">
                                        Precio: mayor a menor
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {products.length > 0 ? (
                <section className="container">
                    <section className="row">
                        {products.map((e, index) => (
                            <div key={e._id} className="col-12 col-sm-6 col-md-3">
                                <Card key={index} nombre = {e.nombre}
                                price = {e.price}
                                etiqueta = {e.etiqueta}
                                imagen = {e.fotos}
                                id = {e._id}
                                sku = {e.sku}/>
                            </div>
                        ))}     
                    </section>
                </section>
            ) : null }
        </>
    );
}