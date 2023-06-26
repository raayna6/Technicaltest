import React from "react";
import './Loginpage.css'

const LoginPage = () => {
    return(
        <div className="login">
            <div className="login-1">
                <p className="text-login-1">WELCOME!</p>
            </div>
            <div className="login-2">
                <p className="text-login-2">Enter your mobile number and password to login</p>
            </div>
            <div className="login-3">
                <input className="input-login-1"></input>
                <input className="input-login-2"></input>
                <button className="button-login-1">Log In</button>
            </div>
            <div className="login-4">
                <p className="text-login-3">Forget password?</p>
            </div>
            <div>
                <hr className="garis"></hr>
            </div>
            <div className="login-5">
                <div>
                    <p className="text-login-4">Not A Member Yet?</p>
                    <p className="text-login-5">Register to get reward points and exclusive promotions.</p>
                </div>
                <div>
                    <button className="button-login-2">Register</button>
                </div>
            </div>
        </div>
    )

}

export default LoginPage;