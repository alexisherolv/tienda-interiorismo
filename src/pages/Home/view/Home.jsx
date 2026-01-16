import React, { useEffect, useState } from "react";
import Artesanos from "../../../atomics/organisms/Artisans/Artisans";
import GetInfo from "../../../atomics/organisms/GetInfo/GetInfo";
import Slides from "../../../atomics/molecules/Slides/Slides";
import Card from "../../../atomics/molecules/Card/Card";
import { getProducts } from '../services/home';

export default function Home() {

    const [products, setProducts] = useState([]);

    const imagenSlide = `${process.env.PUBLIC_URL}/images/SLIDE7.png`;

    useEffect(function () {
        getProducts()
        .then(data => {
            setProducts(Object.values(data));
        })
        .catch(() => {
            alert('No se pudo consultar la información de los productos');
        });
    }, []);

    return products.length === 0 ? (
        <>
            <Slides imagen = {imagenSlide} />
            <Artesanos />
            <GetInfo />
        </>
      ) : (
        <>
            <Slides imagen = {imagenSlide} />
            
            <section className="container home-products">
                <div className="row">
                    {products?.slice(0, 4).map(product => (
                    <div key={product._id} className="col-12 col-sm-6 col-md-3">
                        <Card
                            key={product._id}
                            nombre={product.nombre}
                            price={product.price}
                            etiqueta={product.etiqueta}
                            imagen={product.fotos?.[0]}
                            id={product._id}
                            sku={product.sku}
                        />
                    </div>
                    ))}
                </div>
            </section>
            <Artesanos />
            <section className = "container home-products"> 
                <div className="row">
                    {products?.slice(4, 8).map(product => (
                    <div key={product._id} className="col-12 col-sm-6 col-md-3">
                        <Card
                            key={product._id}
                            nombre={product.nombre}
                            price={product.price}
                            etiqueta={product.etiqueta}
                            imagen={product.fotos?.[0]}
                            id={product._id}
                            sku={product.sku}
                        />
                    </div>
                    ))}
                </div>
            </section>
            <GetInfo />
            <section className = "container home-products"> 
                <div className="row">
                    {products?.slice(8, 12).map(product => (
                    <div key={product._id} className="col-12 col-sm-6 col-md-3">
                        <Card
                            key={product._id}
                            nombre={product.nombre}
                            price={product.price}
                            etiqueta={product.etiqueta}
                            imagen={product.fotos?.[0]}
                            id={product._id}
                            sku={product.sku}
                        />
                    </div>
                    ))}
                </div>
            </section>
        </>  
    );
}