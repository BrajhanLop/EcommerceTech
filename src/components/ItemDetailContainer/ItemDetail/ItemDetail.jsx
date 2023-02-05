import React, { useContext } from "react";
import { BsCheck2 } from "react-icons/bs";
import { ImStarFull } from "react-icons/im";
import { TfiCommentAlt } from "react-icons/tfi";
import { AiOutlineShopping } from "react-icons/ai";
import "./itemdetail.css";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { productsbyId } from '../../../services/firebase';
import { useState } from "react";
import { CartContext } from "../../../context/CartContext";
import NotFound from "../../../pages/nofound/NotFound";
import Loading from "../../Loading/Loading";

const ItemDetail = () => {
const [isLoading, setisLoading] = useState(true)
const [productId, setproductId]  = useState({})
const { backHome, productadd, swit, backCart } = useContext(CartContext);
const {id} = useParams();


useEffect(()=> {
  productsbyId(id).then(res => {
    setproductId(res)
    setisLoading(false)
  })
  .catch(error => console.log(error))
  
},[])

useEffect(()=> {
  swit()
}, [id])


  return (
<>

    {
      isLoading ?
      <Loading/>
        :      
      productId ?
      
    <div className="product-detail">
      <div className="">
        <img
          className="card-img-detail"
          src={productId.img}
          alt=""
        />
      </div>
      <div className="detaill">
        <p className={ productId.stock == 0? "check-stock check-stockalt" : "check-stock"}>
          <BsCheck2 /> In Stock
        </p>
        <div>

        <p className="tittle-detail">{productId.nombre} </p>
        <p className="tittle-detail il">{productId.categoria?.toUpperCase()}</p>

        </div>
        <div className="resen">
          <div className="stars">
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull /> 10
          </div>
          <ul className="list-resen">
            <li className="fle">
              <TfiCommentAlt /> <p> 32 reviews</p>
            </li>
            <li className="fle">
              <AiOutlineShopping />
              <p> 154 sold</p>
            </li>
          </ul>
        </div>
        <p className="pre-detail">$ 129.95</p>
        <p className="sub">
          Stock: <span className="parr"> {productId.stock} unid</span>
        </p>
        <p className="sub">
          Description:{" "}
          <span className="parr">
            {productId.descripcion}
          </span>
        </p>
        <div className="agrup-btn">
          {
            productadd ? 
          <div className="btn-container">
          <button className="btn-finishshop" onClick={backCart}>Finish Shoping</button>
          </div> :

          <ItemCount productId={productId}/>
          }
          <div className="btn-volver-container">
          <button className="btn-volver" onClick={backHome}>Back</button>
          </div>
        </div>
      </div>
    </div>
    :
    <NotFound/>
    }


</>
   
  );
};

export default ItemDetail;
