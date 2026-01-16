import React, { useState, useEffect } from "react";
import Slides from "../../../atomics/molecules/Slides/Slides";
import { useNavigate } from "react-router-dom";

export default function () {
  const token = localStorage.getItem("token");
  const tipo = localStorage.getItem("tipo");

  const navigate = useNavigate();

  const imagenSlide = `${process.env.PUBLIC_URL}/images/minislide-admin.png`;

  useEffect(() => {
    if (!token || tipo !== "administrador") {
      navigate("/", { replace: true });
    }
  }, [navigate, token, tipo]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tipo");
    localStorage.removeItem("id");

    navigate("/sign-in", { replace: true });
  };

  return (
    <>
      <Slides imagen={imagenSlide}></Slides>
      <section className="container admin">
        <h1>Area del administrador</h1>
        <div class="form-group d-flex justify-content-center">
          <button
            type="button"
            class=" boton-logout"
            onClick={logout}
          >
            Cerrar sesión
          </button>
        </div>
      </section>
    </>
  );
}