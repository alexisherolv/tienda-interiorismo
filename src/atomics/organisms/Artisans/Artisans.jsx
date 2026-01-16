import React from "react";

export default function Artesanos() {

    const imagenPrincipal = `${process.env.PUBLIC_URL}/images/SLIDE8.png`;

    return(
        <>
            <section className="artesanos">
                <div className = "arte-2">
                    <img src={imagenPrincipal} className="img-fluid" alt="Responsive"/>
                    <div className ="text-img">
                        <p>TODOS NUESTROS DISEÑOS ESTÁN ELABORADOS</p>
                        <p>CON MADERAS FINAS TRABAJADAS POR ARTESANOS</p>
                        <h1>Mexicanos</h1>
                    </div>
                </div>
            </section>
        </>
    );
}