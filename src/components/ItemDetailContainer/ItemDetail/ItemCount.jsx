import React from "react";
import "./itemdetail.css";
import { BsCartPlus } from "react-icons/bs";

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const ItemCount = ({productId}) => {
  const { incrementCant, decrementCant, cant, addCart } = useContext(CartContext);

  return (
    <div className="itemcount-container">
      <button className={cant < 2 ? "btn-count  btn-disabled" : "btn-count"} disabled={cant < 2} onClick={decrementCant}>-</button>
      <p className="numb"> {cant} </p>
      <button className={cant == productId.stock ? "btn-count  btn-disabled" : "btn-count"} disabled={cant == productId.stock} onClick={incrementCant}>+</button>
      <button className="addcart" onClick={()=>addCart(productId)}>
        Add Cart
        <BsCartPlus className="cartico" />
      </button>
    </div>
  );
};

export default ItemCount;
