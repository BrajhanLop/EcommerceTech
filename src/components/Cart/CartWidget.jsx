import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { BsTrash } from "react-icons/bs";

import "./cartwidget.css";

const CartWidget = () => {
  const { cart, setcart, deleteAll, goCheckin, sumaTotal } =
    useContext(CartContext);

  const addCantProductById = (id) => {
    const index = cart.findIndex((pro) => pro.id == id);
    cart[index].cantidad += 1;
    cart[index].subtotal = cart[index].cantidad * cart[index].precio;
    setcart([...cart]);
  };

  const quitCantProductById = (id) => {
    const index = cart.findIndex((pro) => pro.id == id);
    cart[index].cantidad -= 1;
    cart[index].subtotal = cart[index].cantidad * cart[index].precio;
    setcart([...cart]);
  };

  const deleteProduct = (id) => {
    const index = cart.findIndex((pro) => pro.id == id);
    cart.splice(index, 1);
    setcart([...cart]);
  };

  return (
    <>
    {
      cart.length == 0 ?
      <div className="img-cart-null">
      <img src="https://www.distritomoda.com.ar/sites/all/themes/omega_btob/images/carrito_vacio_nuevo.png" alt=""  />
      </div>
      :
      <div className="card-widget">
        <h2>My Cart ({cart.length})</h2>

        <div>
          {cart.map((car) => (
            <div className="card" key={car.id}>
              <div className="cart-img">
                <img src={car.img} alt="" width="220px" height="180px" />
              </div>
              <div className="desc-cart">
                <div>
                  <p className="tittle-detail">{car.nombre}</p>
                  <p className="tittle-detail il">
                    {car.categoria.toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="tittle-detail il">Precio: $ {car.precio}</p>
                  <p className="tittle-detail il">Cantidad: </p>
                  <div className="btns-cart">
                    <button
                      className={
                        car.cantidad < 2
                          ? "btn-count  btn-disabled"
                          : "btn-count"
                      }
                      disabled={car.cantidad < 2}
                      onClick={() => quitCantProductById(car.id)}
                    >
                      -
                    </button>
                    <p className="numb">{car.cantidad}</p>
                    <button
                      className="btn-count"
                      onClick={() => addCantProductById(car.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="btn-del-cart">
                <p className="tittle-detail">Subtotal: $ {car.subtotal} </p>
                <button
                  className="btn-volver volv"
                  onClick={() => deleteProduct(car.id)}
                >
                  Delete Product
                  <BsTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-pur">
          <p className="tittle-detail">Total: $ {sumaTotal()} USD </p>
          <div>
            <button className="btn-remove" onClick={deleteAll}>
              Remove All
            </button>
            <button className="btn-purchase" onClick={goCheckin}>
              Purchase
            </button>
          </div>
        </div>
      </div>

    }

    </>
  );
};

export default CartWidget;
