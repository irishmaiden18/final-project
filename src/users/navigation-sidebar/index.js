import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];
 return (
 <div className="list-group">
              <Link to="/users/home" className={`list-group-item ${active === 'home'?'active':''}
               ${active == '*'?'active':''}`}>
                Home
              </Link>
              <Link to="/users/search" className={`list-group-item
                             ${active === 'search'?'active':''}`}>
                Search
              </Link>
              <Link to="/users/profile" className={`list-group-item
                             ${active === 'profile'?'active':''}`}>
                              Profile
              </Link>
              <Link to="/users/login" className={`list-group-item
                            ${active === 'login'?'active':''}`}>
                               Logout
             </Link>
            </div>
);
};
export default NavigationSidebar;