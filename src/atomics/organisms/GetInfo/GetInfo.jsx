import React from "react";
import { Link } from "react-router-dom";

export default function GetInfo() {
    return(
        <>
            <section className="get-info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="arte-2 col-sm-6">
                            <img src={process.env.PUBLIC_URL + '/images/S1.png'} class="img-fluid" alt="Responsive"/>
                            <div className ="text-img2">
                                <h1>Quiénes somos</h1>
                                <Link className="navbar-brand" to="/who-we-are">
                                    <button type="button" className="btn btn-primary btn-lg">CONÓCENOS</button> 
                                </Link>
                            </div>
                        </div>
                        <div className="arte-2 col-sm-6">
                            <img src={process.env.PUBLIC_URL + '/images/S2.png'} className="img-fluid" alt="Responsive"/>
                            <div className ="text-img2">
                                <h1>Contáctanos</h1>
                                <Link  className="navbar-brand" to="/contact">
                                    <button type="button" className="btn btn-primary btn-lg">SOLICITA UNA CITA</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}