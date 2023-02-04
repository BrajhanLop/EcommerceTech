import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {
  loadProducts,
  obtenerProductosPorCategoria,
  productosAll,
} from "../../services/firebase";
import Loading from "../Loading/Loading";

import ItemList from "./ItemList/ItemList";
import "./ItemList/itemlist.css";

const ItemListContainer = () => {

  const [isLoading, setisLoading] = useState(true)
  const [products, setproducts] = useState([]);
  const [productsforCategory, setproductsforCategory] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    if (cat === undefined) {
      productosAll().then((res) => {
        setproducts(res)
        setisLoading(false)
        
      });

        
    } else {
      obtenerProductosPorCategoria(cat).then((res) =>{
        setproductsforCategory(res)
        setisLoading(false)
      }
      );
    }
  }, [cat]);


  return (
    <>
    {
      isLoading ?
        <Loading/>
      :
      <div className="itemList__container">
      {cat === undefined
        ? products.map((prod) => <ItemList prod={prod} key={prod.id} />)
        : productsforCategory.map((prod) => (
            <ItemList prod={prod} key={prod.id} />
          ))}
          {/* <button onClick={loadProducts}>cargar</button> */}
       
    </div>
    }
    
    </>
   
  );
};

export default ItemListContainer;
