import React from "react";
import Slides from "../../../atomics/molecules/Slides/Slides";

export default function Wishlist()
{
    const imagenSlide = `${process.env.PUBLIC_URL}/images/S10.png`;

    return(
        <>
            <Slides imagen = {imagenSlide} />
        </>
        
    );
}