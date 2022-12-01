import NavigationSidebar from "./navigation-sidebar";
import {Routes, Route} from "react-router";
import Home from "./home";
import Login from "../any/login";
import Profile from "./profile";
import Search from "./search";
import Movies from "./movies";




function Users() {
 return (

    <div className="row mt-2">
        <div style={{backgroundColor:"#1DB954"}}>
                <h1>SpotiReview</h1>
        </div>
         <div>
              <br/>
         </div>
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="home"/>
      </div>
      <div className="col-10 col-md-10 col-lg-7 col-xl-6"
           style={{"position": "relative"}}>
        <Routes>

                 <Route path="/*" element={<Home/>}/>
                 <Route path="home" element={<Home/>}/>
                 <Route path="profile" element={<Profile/>}/>
                 <Route path="search" element={<Search/>}/>
                 <Route path="login" element={<Login/>}/>


        </Routes>
      </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
      <h1>Recommended</h1>
      </div>
    </div>

 );
};
export default Users