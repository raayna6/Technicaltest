import React from "react";
import "./Header.css"
import { ICcart, logoBK } from "../assets";

const Header = () => {
    return(
        <div className="header">
            <div className="under-logo" >
                <img className="logo" src={logoBK}></img>
            </div>
            <div className="submenu">
                <p className="text-submenu-1">Delivery</p>
                <p className="text-submenu-2">Order</p>
            </div>
            <div className="submenu">
                <p className="text-submenu-1">Get Fresh</p>
                <p className="text-submenu-2">Promotions</p>
            </div>
            <div className="menu-login">
                <p className="menu-item">Log In</p>
            </div>
            <div className="under-cart">
                <img className="cart" src={ICcart}></img>
            </div>
        </div>
    )
}

export default Header;