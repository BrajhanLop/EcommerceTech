import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AiOutlineDown } from "react-icons/ai";
import espana from "../../images/espana.png";
import "./subnavBar.css";
import { Link } from "react-router-dom";
const SubnavBar = () => {
  return (
    <nav className="subnav-nav">
      <div className="subnav-nav-category">
        <ul>
          <li>
            {" "}
          <Link to="/"> <VscThreeBars /> All Category </Link> 
          </li>
          <li> <Link to="/category/computadora"> Computer </Link></li>
          <li><Link to="/category/mouse">Mouse</Link></li>
          <li><Link to="/category/laptop">Laptop</Link></li>
          <li><Link to="/category/teclado">Keyboard</Link></li>
        
        </ul>
      </div>
      <div className="subnav-nav-language">
        <ul>
          <div className="language">
            English, USD <AiOutlineDown className="down" />
          </div>
          <div className="language">
            <div>
              Ship to
              <img className="flag" src={espana} alt="" height="16px" />
            </div>
            <AiOutlineDown className="down" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default SubnavBar;
