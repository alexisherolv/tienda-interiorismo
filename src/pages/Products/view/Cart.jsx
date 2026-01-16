import React from "react";
import Slides from "../../../atomics/molecules/Slides/Slides";
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function Cart()
{
      const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    
      var formatterPeso = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
      })

      var total=0;
      if(!isEmpty){
        for(let i = 0; i< items.length; i++){
          total = total + items[i].quantity*items[i].price;
        }
      }

      var envio=157;

      const imagenSlide = `${process.env.PUBLIC_URL}/images/minislide2.png`;

      return isEmpty === true ? (
        <>
          <Slides imagen = {imagenSlide}/>
          <section className="container">
            <img className="imagen-vacio" src={process.env.PUBLIC_URL + '/images/carrito-de-compras-3.svg'} width="150" height="150" alt="..." />
            <h1 className="vacio">Tu carrito está vacío</h1>
            <Link aria-current="page" to="/all-products">
              <p className="vacio-volver">VOLVER A LA TIENDA</p>
            </Link>
          </section>
        </>
        ) : (
        <>
          <Slides imagen = {imagenSlide}/>
          <section className="cart-principal">
            <section className="container">
              <div className="row">
                <div className="col-sm-8">
                  <ul className="list-group">
                    {items.map(({ id, fotos, nombre, price, quantity }) => {
                      const subtotal = quantity * price;

                      return (
                        <li key={id} className="list-group-item">
                          <div className="row align-items-center">
                            
                            <div className="col-sm-3">
                              <img
                                src={fotos?.[0]}
                                className="img-thumbnail"
                                alt={nombre}
                              />
                            </div>

                            <div className="col-sm-9">
                              <div className="row align-items-center">

                                <div className="col-sm-9">
                                  <h1 className="titulo">{nombre}</h1>
                                  <p className="precio">{formatterPeso.format(price)}</p>

                                  <div className="d-flex align-items-center gap-2">
                                    <button
                                      className="menos boton-masmenos"
                                      onClick={() => updateItemQuantity(id, quantity - 1)}
                                      disabled={quantity <= 1}
                                    >
                                      −
                                    </button>

                                    <span>{quantity}</span>

                                    <button
                                      className="mas boton-masmenos"
                                      onClick={() => updateItemQuantity(id, quantity + 1)}
                                    >
                                      +
                                    </button>
                                  </div>

                                  <p className="precio-final">
                                    {formatterPeso.format(subtotal)}
                                  </p>
                                </div>

                                <div className="col-sm-3 text-end">
                                  <button
                                    className="eliminar"
                                    onClick={() => removeItem(id)}
                                    aria-label="Eliminar producto"
                                  >
                                    ×
                                  </button>
                                </div>

                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="list-group">
                    <li className="list-group-item total">
                      <h2 className="titulo-total">Total del carrito</h2>
                      <hr />
                    </li>
                    <li className="list-group-item total">
                      <div className="row">
                        <div className="col">
                          <p className="subtotal">SUBTOTAL:</p>
                        </div>
                        <div className="col">
                          <p className="subtotal">{formatterPeso.format(total)}</p>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item total">
                      <div className="row">
                        <div className="col">
                          <p className="subtotal">ENVIO:</p>
                        </div>
                        <div className="col">
                          <p className="subtotal">{formatterPeso.format(envio)}</p>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item total">
                      <div className="row">
                        <div className="col">
                          <p className="subtotal">TOTAL:</p>
                        </div>
                        <div className="col">
                          <h1 className="titulo-total">{formatterPeso.format(envio+total)}</h1>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item total">
                      <button type="button" className="boton-comprar">FINALIZAR COMPRA</button>
                    </li>
                  </ul> 
                </div>
              </div>
            </section>
          </section>
        </>
      );
}