import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setcart] = useState([]);
  const [cant, setcant] = useState(1);
  const [productadd, setproductadd] = useState(false);
  

  const incrementCant = () => {
    setcant(cant + 1);
  };

  const decrementCant = () => {
    setcant(cant - 1);
  };

  const backHome = () => {
    navigate("/");
    setcant(1);
  };

  const backCart = () => {
    navigate("/cart");
    setcant(1);
  };
  const swit = () => {
    setproductadd(false);
  };

  const addCart = (prod) => {
    const index = cart.findIndex((pro) => pro.id == prod.id);
    if (index !== -1) {
      Swal.fire("Warning!", "this product already added to the cart", "warning");
      return;
    }

    prod.cantidad = cant;
    prod.subtotal = cant * prod.precio;
    setcart([...cart, prod]);
    setcant(1);
    setproductadd(!productadd);
    Swal.fire("Good!", "Product Add Cart!", "success");
  };

  const deleteAll = () => {
    setcart([]);
    setcant(1);
  };

  const goCheckin = () => {
    navigate("/checkin");
  };

  const sumaTotal = () => {
    const total = cart.reduce( (acc, car) => acc + car.subtotal,0 )
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        incrementCant,
        decrementCant,
        cant,
        backHome,
        addCart,
        cart,
        productadd,
        swit,
        backCart,
        setcart,
        deleteAll,
        goCheckin,
        sumaTotal,
      
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
