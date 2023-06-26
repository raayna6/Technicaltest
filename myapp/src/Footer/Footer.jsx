import React from "react";
import { ICcall, ICemail, ICfacebook, ICinstagram, ICtwitter, ICyoutube } from "../assets";
import './Footer.css'

// const Icon = ({img}) => {
//     return(
//         <div className="icon-wrapper">
//             <img className="icon-medsos" src={img}></img>
//         </div>
//     )
// }

const Footer = () => {
    return(
        <div className="footer">
            <div className="line-1">
                <p className="text-style-1">BURGER KING® DELIVERY</p>
            </div>
            <div className="line-2">
                <div className="subline-1">
                    <img className="icon-1" src={ICcall}></img>
                    <p className="text-style-2">15000 25</p>
                </div>
                <div className="subline-2"> 
                    <img className="icon-1" src={ICemail}></img>
                    <p className="text-style-3">guestservice@burgerking.co.id</p>
                </div>
                <div className="subline-3">
                    <img className="icon" src={ICfacebook}></img>
                    <img className="icon" src={ICinstagram}></img>
                    <img className="icon" src={ICtwitter}></img>
                    <img className="icon" src={ICyoutube}></img>
                </div>
            </div>
            <div className="line-3">
                <p className="text-style-4">About Us |</p>
                <p className="text-style-4">Kebijakan Privasi |</p>
                <p className="text-style-4">Syarat dan Ketentuan |</p>
                <p className="text-style-5">TM & © 2023 Burger King Corporation. Used Under License. All rights reserved.</p>
            </div>
        </div>
        // <div >
        //     <div className="footer">
        //         {/* <div >
        //             <img className="logo" src={LogProd}></img>
        //         </div> */}
        //         {/* <div className="social-wrapper">
        //             <Icon img={LogFacebook}/>
        //             <Icon img={LogTwitter}/>
        //             <Icon img={LogInstagram}/>
        //         </div> */}
        //     </div>
        //     <div className="copyright">
        //         <p className="text">Copyright</p>
        //     </div>
        // </div>
    )
}

export default Footer;