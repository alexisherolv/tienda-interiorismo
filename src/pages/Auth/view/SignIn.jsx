import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import Slides from "../../../atomics/molecules/Slides/Slides";

export default function SignIn() {
  const token = localStorage.getItem("token");
  const tipo = localStorage.getItem("tipo");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const imagenSlide = `${process.env.PUBLIC_URL}/images/S12.png`;

  useEffect(function () {
    if(token!==null)
    {
      if(tipo === "administrador")
      {
        navigate("/admin")
      }
      else{
        navigate("/profile")
      }
    }
  }, []);

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onSubmitForm = (event) => {
    event.preventDefault();

    const credentials = { email, password };

    fetch(`http://localhost:5001/v1/usuarios/entrar`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) {
        setError(
          <p className="need">El correo electrónico o la contraseña son incorrectos</p>
        );
      } else {

        //Token
        localStorage.setItem("tipo", data.user.tipo);
        localStorage.setItem("token", data.user.token);
        localStorage.setItem("id", data.user.id);
        
        if(data.user.tipo === "administrador")
        {
          navigate("/admin");
        }
        else{
          navigate("/profile");
        }
      }
    });
  }

  return (
      <>
        <Slides imagen={imagenSlide}></Slides>
        <section class="container">
        <div className="row justify-content-center">
        <form className="col-sm-8 mt-4" onSubmit={onSubmitForm}>
            <h1 className="title">Iniciar Sesión</h1>
            <p className="need">
            <Link className="need-account" to="/sign-up">
                ¿Necesitas una cuenta?
            </Link>
            </p>
            {error}
            <div className="form-group">
            <label for="inputEmail"></label>

            <input
                type="email"
                className="form-control form-control-lg inputs"
                id="inputEmail"
                name="email"
                formControlName="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={onChangeEmail}
            />
            </div>
            <div className="form-group">
            <label for="inputPassword"></label>

            <input
                type="password"
                className="form-control form-control-lg inputs"
                id="inputPassword"
                name="password"
                formControlName="password"
                placeholder="Contraseña"
                onChange={onChangePassword}
            />
            </div>
            <div className="form-group d-flex">
            <button type="submit" className="boton-iniciar">
                Iniciar Sesión
            </button>
            </div>
        </form>
        </div>
        </section>
      </>  
  );
}