//import {useState} from "react";
//import {useDispatch, useSelector} from "react-redux";
//import {loginThunk, registerThunk} from "./users-thunks";
import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const Login = () => {
    return(
        <>

            <h1>Login</h1>
            <Link to="/users/*">
                <button class="btn btn-primary btn-sm">Login</button>
            </Link>
        </>
    );
}

export default Login;