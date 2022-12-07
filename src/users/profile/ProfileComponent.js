import "./index.css";
import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const ProfileComponent = () => {
const {pathname} = useLocation();
 const paths = pathname.split('/')
 const active = paths[2];
 return(


<div>
    <div>
    <img className="wd-bannerPicture" src="/src/images/BackgroundPic.png"/>
    <img className="wd-profilePicture" src="../images/userImage.png"/>
    <Link to="/users/editprofile" className="wd-edit">
       <button className="btn btn-primary btn-sm">Edit Profile</button>
    </Link>


    </div>

     <div className ="wd-box">

            <h3 className="wd-details"> Name: XYZ </h3>
            <h6> User Name: xyz</h6>
            <h6> Email: abc@spotireview.com</h6>

            <p>Bio: Web Development Project</p>
            <h6>Nationality: American</h6>
             <h6>Followers: 20k</h6>
        </div>

        <div className ="wd-box">
        <h1>Users Top 5 Tracks:</h1>
        <h6>1.abc</h6>
        <h6>2.def</h6>
        <h6>3.mno</h6>
        <h6>4.uvw</h6>
        <h6>5.xyz</h6>
        </div>



</div>


 );
};
export default ProfileComponent;