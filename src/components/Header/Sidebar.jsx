import React from "react";
import "./sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineClose, AiOutlineUnorderedList, AiOutlineHeart } from "react-icons/ai";
import {IoHomeOutline} from 'react-icons/io5';
import {BsCardList} from 'react-icons/bs';
import {TfiWorld, TfiHeadphoneAlt} from 'react-icons/tfi';
import {HiOutlineBuildingOffice2} from 'react-icons/hi2';
const Sidebar = ({activesidle, activeSidleHandler}) => {
  return (
    <div className={activesidle ? "sidebar active" : "sidebar" }>
      <div className="sidebar-header">
        <div className="sidebar-close" onClick={activeSidleHandler}>
          <AiOutlineClose />
        </div>
        <div className="sidebar-user-icon">
        <FaUserCircle />
        </div>
        
        <div>
        <span className="sidebar-title">Sign in </span>
        |
        <span className="sidebar-title"> Register</span>
        </div>
        
      </div>
      <div className="sidebar-body">
          <ul className="sidebar-ul">
            <li className="sidebar-li"> <IoHomeOutline/> <span className="sidebar-text-li">Home</span> </li>
            <li className="sidebar-li"><AiOutlineUnorderedList/> <span className="sidebar-text-li">Categories</span> </li>
            <li className="sidebar-li"> <AiOutlineHeart/> <span className="sidebar-text-li"> Favorites</span> </li>
            <li className="sidebar-li"> <BsCardList/><span className="sidebar-text-li"> My orders</span></li>
            <hr className="hr" />          
            <li className="sidebar-li"> <TfiWorld/><span className="sidebar-text-li"> English | USD</span></li>
            <li className="sidebar-li"><TfiHeadphoneAlt/><span className="sidebar-text-li"> Contact us</span></li>
            <li className="sidebar-li"><HiOutlineBuildingOffice2/><span className="sidebar-text-li"> About</span></li>
            <hr  className="hr "/>          
            <li className="sidebar-li2"><span className="sidebar-text-li">User agreement</span></li>
            <li className="sidebar-li2"><span className="sidebar-text-li">Partnership</span></li>
            <li className="sidebar-li2"><span className="sidebar-text-li">Privacy policy</span></li>
            </ul>
      </div>
    </div>
  );
};

export default Sidebar;
