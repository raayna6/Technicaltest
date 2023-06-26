import React from "react";
import './Regispage.css'

const RegisPage = () => {
    return(
        <div className="regis">
            <div className="regis-1">
                <p className="text-regis-1">Register</p>
            </div>
            <div className="regis-2">
                <p className="text-regis-2">Please enter your mobile number to register</p>
            </div>
            <div className="regis-3">
                <input className="input-regis"></input>
                <button className="button-regis">Register</button>
            </div>
        </div>
    )

}

export default RegisPage;