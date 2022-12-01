//import {useState} from "react";
//import {useDispatch, useSelector} from "react-redux";
//import {registerThunk} from "./users-thunks";
import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const Register = () => {
    return(
        <>

            <h1>Register</h1>
            <Link to="/users/*">
                            <button class="btn btn-primary btn-sm">Register</button>
            </Link>
        </>
    );
}

export default Register;