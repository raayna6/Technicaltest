import React from "react";
import './Mainpage.css'
import { Link } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import DetailProduk from "../Detailproduk/Detailproduk";
import { Listmenu1, Listmenu2, Listmenu3, Listmenu4, Listmenu5, Listmenu6, Listmenu7, Listmenu8, Listmenu9 } from "../assets";

const MainPage = () => {
    return (
    <div className="mainpage">
        <div>
            <p className="judul">Our Menus</p>
        </div>
        <div className="list">
            <div className="list-1">
                <div className="menu">
                    <img className="pic" src={Listmenu1}></img>
                    <div className="name">
                        <p className="desc">Combo Burger</p>
                        <Link to="/detail">
                            <button className="btn">Order</button>
                        </Link>
                    </div>
                </div>
                <div className="menu">
                    <img className="pic" src={Listmenu2}></img>
                    <div className="name">
                        <p className="desc">Combo Burger</p>
                        <button className="btn">Order</button>
                    </div>
                </div>
                <div className="menu">
                    <img className="pic" src={Listmenu3}></img>
                    <div className="name">
                        <p className="desc">Combo Burger</p>
                        <button className="btn">Order</button>
                    </div>
                </div>
            </div>
            <div className="list-2">
                <div className="menu">
                    <img className="pic" src={Listmenu4}></img>
                    <div className="name">
                        <p className="desc">Combo Burger</p>
                        <button className="btn">Order</button>
                    </div>
                </div>
                <div className="menu">
                    <img className="pic" src={Listmenu5}></img>
                    <div className="name">
                        <p className="desc">Combo Burger</p>
                        <button className="btn">Order</button>
                    </div>
                </div>
                <div className="menu">
                    <img className="pic" src={Listmenu6}></img>
                    <div className="name">
                        <p className="desc">Combo Burger</p>
                        <button className="btn">Order</button>
                    </div>
                </div>
            </div>
            <div className="list-3">
                <div className="menu">
                    <img className="pic" src={Listmenu7}></img>
                    <div className="name">
                        <p className="desc">Combo Burger</p>
                        <button className="btn">Order</button>
                    </div>
                </div>
                <div className="menu">
                    <img className="pic" src={Listmenu8}></img>
                    <div className="name">
                        <p className="desc">Combo Burger</p>
                        <button className="btn">Order</button>
                    </div>
                </div>
                <div className="menu">
                    <img className="pic" src={Listmenu9}></img>
                    <div className="name">
                        <p className="desc">Combo Burger</p>
                        <button className="btn">Order</button>
                    </div>
                </div>
            </div>
        </div>
        <Router>
            <Route path="/detail" component={DetailProduk} />
        </Router>
    </div>
    )
}

export default MainPage;