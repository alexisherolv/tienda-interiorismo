import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props){
    const navigate = useNavigate();

    function onClickProduct() {
        navigate(`/product/${props.id}/`);
        console.log("props" +props)
    }

    var formatterPeso = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    })

    return(
        <div className="col-sm">
            <div className="card border-0" onClick={onClickProduct}>
                <div className = "row parejo">
                    <div className="col-6 info">
                        <h6 className="card-title">{props.nombre.toUpperCase()}</h6>
                        <p className="card-text">{formatterPeso.format(props.price)}</p>
                    </div>
                    <div className="col-3 etiqueta">
                        NEW
                    </div>
                </div>
                <div className = "img-prod">
                    <img src={props.imagen} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.sku}</p>
                </div>
            </div>
        </div>
    );
}