//import {useState} from "react";
//import {useDispatch, useSelector} from "react-redux";
//import {registerThunk} from "./users-thunks";
import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "./index.css";

const Register = () => {
    return(
        <>

              <center>
                        <table bgcolor="white" cellpadding="15">
                        <tr>
                        <td colspan="2"><center><h1><i>Please Register Yourself!</i></h1></center>
                        </td>
                        </tr>
                        <tr>
                                                <td>
                                                <h3><i>First Name:</i></h3>
                                                </td>
                                                <td>
                                                <input name="firstname" type="text" className ="wd-curved-border"/>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td>
                                                <h3><i>Last Name:</i></h3>
                                                </td>
                                                <td><input name="lastname"
                                                type="text" className ="wd-curved-border"/>
                                                </td>
                                                </tr>
                        <tr>
                        <td>
                        <h3><i>User Name:</i></h3>
                        </td>
                        <td>
                        <input name="username" type="text" className ="wd-curved-border"/>
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
                                                <h3><i>Verify Password:</i></h3>
                                                </td>
                                                <td><input name="verifypass"
                                                type="password" className ="wd-curved-border"/>
                                                </td>
                                                </tr>
                        <tr>

                                                <td>
                                                <h3><i>Email:</i></h3>
                                                </td>
                                                <td>
                                                <input name="email" type="text" className ="wd-curved-border"/>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td>
                                                <h3><i>Nationality(optional):</i></h3>
                                                </td>
                                                <td><input name="nationality"
                                                type="text" className ="wd-curved-border"/>
                                                </td>
                                                </tr>
                        <tr>
                        <td>

                        </td>
                        <td>
                        <center>
                       <Link to="/users/*">
                            <button class="btn btn-primary btn-md">Register</button>
                         </Link>
                         </center>
                        </td>
                        </tr>
                        </table></center>



        </>
    );
}

export default Register;