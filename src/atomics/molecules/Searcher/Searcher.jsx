import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Buscador(){
    const [buscador, setBuscador] = useState("");
    const navigate = useNavigate();

    function onClickBuscar(event) {
        event.preventDefault();
        navigate(`/search/${buscador}/`);
    }

    function onChangeBuscador(event) {
        setBuscador(event.target.value);
        console.log(buscador);
    }
    
    return(
        <section>
            <form className="formato-buscar">
                <input 
                    className="busca-algo" 
                    type="text" 
                    placeholder=""
                    onChange = {onChangeBuscador}/>
                <button 
                    className="boton-busca-algo"
                    onClick={onClickBuscar}> Buscar </button>
            </form>
        </section>
    );
}