import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";
import { createOrder, productosAll, updateStock } from "../../services/firebase";
import "./checkinForm.css";

const CheckinForm = () => {
  const { cart, sumaTotal, backHome, deleteAll } = useContext(CartContext);

const navigate = useNavigate()

const [productos, setproductos] = useState([])

useEffect(()=> {
  productosAll().then(res => setproductos(res))
}, [])






  const checkOut = (e) => {
    e.preventDefault();

    const order = {
      comprador: {
        nombre: e.target.name.value,
        email: e.target.email.value,
        telefono: e.target.fono.value,
      },
      items: cart,
      fecha: new Date(),
      total: sumaTotal(),
    };

    createOrder(order).then((id) => {
      Swal.fire(
        "Good job!",
        `Compra Confirmada, los datos de su pedido se le envio a su correo! con el codigo \n ${id}`,
        "success"
      );
    });
    updateStock(cart)
    deleteAll()
    backHome()
  };

  const backCart = () => {
    navigate('/cart')
  };
  return (
    <div className="container-form" onSubmit={checkOut}>
      <form action="" className="formulario">
        <h2>Registro</h2>
        <div className="cont-nombre">
          <label htmlFor="">Nombre</label>
          <input type="text" name="name" />
        </div>
        <div className="cont-nombre">
          <label htmlFor="">E-Mail</label>
          <input type="text" name="email" />
        </div>
        <div className="cont-nombre">
          <label htmlFor="">Telefono</label>
          <input type="text" name="fono" />
        </div>
        <div className="container-btn">
          <button className="btn-purchase" type="submit">
            confirm
          </button>
          <button className="btn-remove" onClick={backCart}>back to Cart</button>
          
        </div>
      </form>
    </div>
  );
};

export default CheckinForm;
