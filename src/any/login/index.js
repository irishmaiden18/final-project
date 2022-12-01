//import {useState} from "react";
//import {useDispatch, useSelector} from "react-redux";
//import {loginThunk, registerThunk} from "./users-thunks";
import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const Login = () => {
    return(
        <>

            <center>
            <table bgcolor="white" cellpadding="12" border="1">
            <tr>
            <td colspan="2"><center><h1><i><b>Please Login!</b></i></h1></center>
            </td>
            </tr>
            <tr>
            <td>
            <h1><i><b>UserID:</b></i></h1>
            </td>
            <td>
            <input name="id" type="text"/>
            </td>
            </tr>
            <tr>
            <td>
            <h1><i><b>Password:</b></i></h1>
            </td>
            <td><input name="pass"
            type="password"/>
            </td>
            </tr>
            <tr>
            <td>

            </td>
            <td>
            <center>
            <Link to="/users/*">
                 <button class="btn btn-primary btn-sm">Login</button>
             </Link>
             </center>
            </td>
            </tr>
            </table></center>

        </>
    );
}

export default Login;