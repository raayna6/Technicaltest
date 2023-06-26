import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Home.css'
//import RegisPage from "../RegisPage/Regispage";
//import DetailProduk from "../Detailproduk/Detailproduk";
import MainPage from "../MainPage/Mainpage";
import DetailProduk from "../Detailproduk/Detailproduk";
//import LoginPage from "../LoginPage/Loginpage";

const Home = () => {
    return (
        <div className="main-wrapper">
            <div className="header-wrapper">
                <Header/>
            </div>
            <div className="content-wrapper">
                <MainPage/>
            </div>
            <div className="footer-wrapper">
                <Footer/>
            </div>
        </div>
    )
}

export default Home;
