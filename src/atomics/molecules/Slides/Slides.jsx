import React from "react";

export default function Slides(props){
    return(
        <>
            <section className="main">
                <div id="" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.imagen} className="d-block w-100" alt="..."/>
                    </div>
                    </div>
                </div>
            </section>
        </>

    );

}