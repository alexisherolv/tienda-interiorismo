import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slides from "../../../atomics/molecules/Slides/Slides";

export default function Profile() {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const imagenSlide = `${process.env.PUBLIC_URL}/images/S9.png`;

  useEffect(function () {
    if (!token) {
        navigate("/");
        return null;
    }

    fetch(`http://localhost:5001/v1/usuarios/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then((response) => response.json())
    .then((data) => setUser(data));
  }, []);

  const logout = () => {
    localStorage.removeItem("tipo");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/sign-in");
  }

  return (
    <>
        <Slides imagen={imagenSlide}></Slides>
        <div class="row justify-content-center client">
        <div class="col-sm-8 col-md-6">
            <h1>Mis datos</h1>
            <div class="form-group">
            <label for="inputUsername"></label>

            <input
                type="text"
                class="form-control form-control-lg"
                id="inputUsername"
                name="username"
                formControlName="username"
                aria-describedby="usernameHelp"
                placeholder="Username"
                value={"Nombre de usuario: " + user.username}
            />
            </div>
            <div class="form-group">
            <label for="inputEmail"></label>

            <input
                type="text"
                class="form-control form-control-lg"
                id="inputEmail"
                name="email"
                formControlName="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={"Email: " + user.email}
            />
            </div>
            <div class="form-group">
            <label for="inputPassword"></label>

            <input
                type="text"
                class="form-control form-control-lg"
                id="inputPassword"
                name="password"
                formControlName="password"
                aria-describedby="passwordHelp"
                placeholder="Nueva contraseña"
            />
            </div>
            <div class="form-group d-flex justify-content-end">
            <button type="button" class="boton-update">
                Actualizar datos
            </button>
            </div>
            <hr />
            <div class="form-group d-flex justify-content-center">
            <button
                type="button"
                class="boton-logout"
                onClick={logout}
            >
                Cerrar sesión
            </button>
            </div>
        </div>
        </div>
    </>
  );
}