import React from "react";
import "./Detailproduk.css"
import { Listmenu1 } from "../assets";

const DetailProduk = () => {
    return(
        <div className="card">
            <div className="detail">
                <p className="product-title-1">Combo Burger</p>
                <p className="product-title-2">Combo Burger</p>
                <div>
                    <img className="img-detail" src={Listmenu1}></img>
                </div>
            </div>
            <hr className="garis-detail"></hr>
            <div className="desc-detail">
                <div className="counter">
                    <p className="product-price">Rp.53.000</p>
                    <button className="minus" /*onClick={this.handleMinus}*/>-</button>
                    <input type="text" /*value={this.state.order}*//>
                    <button className="plus" /*onClick={this.handlePlus}*/>+</button>
                    <button className="add">Add to Cart</button>
                </div>
            </div>       
        </div>
    )

}

export default DetailProduk;