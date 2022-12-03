//import {useState} from "react";
//import {useDispatch, useSelector} from "react-redux";
//import {loginThunk, registerThunk} from "./users-thunks";
import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "./index.css";

const Login = () => {
    return(
        <>

            <center>
            <table bgcolor="white" cellpadding="15">
            <tr>
            <td colspan="2"><center><h1><i>Welcome, Please Login!</i></h1></center>
            </td>
            </tr>
            <tr>
            <td>
            <h3><i>User Name:</i></h3>
            </td>
            <td>
            <input name="id" type="text" className ="wd-curved-border"/>
            </td>
            </tr>
            <tr>
            <td>
            <h3><i>Password:</i></h3>
            </td>
            <td><input name="pass"
            type="password" className ="wd-curved-border"/>
            </td>
            </tr>
            <tr>
            <td>
            </td>
            <td>
            <center>
            <Link to="/users/*">
                 <button class="btn btn-primary btn-md">Login</button>
             </Link>
             </center>
            </td>
            </tr>
            </table></center>

        </>
    );
}

export default Login;