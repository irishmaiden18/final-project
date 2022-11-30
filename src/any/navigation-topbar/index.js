import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "./index.css";

const NavigationTopBar = () => {
const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];
 return(
   <>

     <ul className="nav nav-pills mb-2">
       <li className="nav-item">
         <Link to="/any/homeany" className={`nav-link ${active === 'homeany'?'active':''}
          ${active == null?'active':''}`}>
         Home
         </Link>
       </li>
       <li className="nav-item">
            <Link to="/any/searchany" className={`nav-link
                            ${active === 'searchany'?'active':''}`}>
             Search
            </Link>
       </li>
       <li className="nav-item">
            <Link to="/any/profileany" className={`nav-link
                                   ${active === 'profileany'?'active':''}`}>
             Profile
             </Link>
       </li>
       <li className="nav-item">
                <Link to="/any/login" className={`nav-link
                                                ${active === 'login'?'active':''}`}>
                Login
                </Link>
       </li>
       <li className="nav-item">
                <Link to="/any/register" className={`nav-link
                                                ${active === 'register'?'active':''}`}>
                Register
                </Link>
      </li>
     </ul>
   </>
 );
};
export default NavigationTopBar;