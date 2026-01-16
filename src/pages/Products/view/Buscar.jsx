import React from "react";
import Slides from "../../../atomics/molecules/Slides/Slides";
import { useParams } from "react-router-dom";

export default function(){
    const { buscarId } = useParams();

    const imagenSlide = `${process.env.PUBLIC_URL}/images/S9.png`;
    
    return(
        <>
            <Slides imagen = {imagenSlide} />
            <h1>Hola, quiero ver el producto {buscarId}</h1>
        </>
    );
}