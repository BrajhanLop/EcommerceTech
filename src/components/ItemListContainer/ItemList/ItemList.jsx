import React from "react";
import { ImStarFull } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import "./itemlist.css";
import { Link } from "react-router-dom";

const ItemList = ({ prod }) => {
  
  return (
    <div>
      <div className="card-product">
        <div>
         <Link to={`/item/${prod.id}`}> <img className="card-img" src={prod.img} alt="" /> </Link>
          <hr className="card-hr" />
        </div>
       
        <div className="card-detail">
          <div className="card-resm">
            <p className="price">
              $ {prod.precio}{" "}
              <span className="subprice">$ {prod.precio + 150} </span>
            </p>
            <div className="stars">
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull />
              <ImStarFull /> 10
            </div>
            <p className="desc">{prod.nombre} </p>
            <p className="desc">{prod.categoria.toUpperCase()}</p>
          </div>
          <div>
            <div className="heart">
              <AiOutlineHeart />
            </div>
          </div>
        </div>
        </div>
      
    </div>
  );
};

export default ItemList;
