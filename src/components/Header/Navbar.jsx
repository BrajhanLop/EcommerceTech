import React, { useContext } from "react";
import "./navbar.css";
import { BiShoppingBag } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";
import InputSearch from "./InputSearch";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const Navbar = ({ activeSidleHandler }) => {

  const { cart } = useContext(CartContext)

  return (
    <header className="header">
      <div className="header-movil">
        <div className="header-bars" onClick={activeSidleHandler}>
          <HiBars3 />
        </div>
        <div className="header-logo">
          <a className="logo" href="/">
            <BiShoppingBag />
          </a>
          <Link to="/">
            <p className="header-nom-logo">Brand</p>
          </Link>
        </div>
      </div>
      <div className="header-search">
        <InputSearch />
        <button className="header-search-btn">Search</button>
      </div>
      <nav className="header-nav">
        <ul className="header-ul">
          <li className="header-li">
            <span className="header-icon">
              {" "}
              <FaUser />{" "}
            </span>
            Profile
          </li>
          <li className="header-li">
            <span className="header-icon">
              {" "}
              <MdMessage />
            </span>
            Message
          </li>
          <li className="header-li">
            <span className="header-icon">
              {" "}
              <AiFillHeart />
            </span>
            Orders
          </li>
          <li className="header-li">
            {
              cart.length == 0 ? null :
            <span className="badge">{cart.length}</span>
            }
            <span className="header-icon">
              <Link to="/cart">
                <MdShoppingCart />
              </Link>
            </span>
            <p className="text-cart">My Cart</p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
