import NavigationTopbar from "./navigation-topbar";
import {Routes, Route} from "react-router";
import HomeAny from "./homeany";
import Register from "../any/register";
import Login from "../any/login";
import ProfileAny from "./profileany";
import SearchAny from "./searchany";





function Any() {
 return (

    <div className="row mt-2">
        <div style={{backgroundColor:"#1DB954"}}>
        <h1>SpotiReview</h1>
        </div>
        <div>
            <br/>
        </div>
      <div className="col-12 col-md-12 col-lg-10 col-xl-8"
           style={{"position": "relative"}}>
           <NavigationTopbar active="home"/>
        <Routes>
                 <Route path="/" element={<HomeAny/>}/>
                 <Route path="homeany" element={<HomeAny/>}/>
                 <Route path="profileany" element={<ProfileAny/>}/>
                 <Route path="searchany" element={<SearchAny/>}/>
                 <Route path="login" element={<Login/>}/>
                 <Route path="register" element={<Register/>}/>


        </Routes>
      </div>

    </div>

 );
};
export default Any