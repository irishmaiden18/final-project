import "./index.css";
const EditProfile = () => {
 return(


<div>
    <div>
    <h1>Edit Profile</h1>
    <img className="wd-bannerPicture" src="/Users/smitdar/Desktop/webdev final project/final-project/src/images/BackgroundPic.png"/>
    <img className="wd-profilePicture" src="/Users/smitdar/Desktop/webdev final project/final-project/src/images/userImage.png"/>



    </div>

     <div className ="wd-box">

            <h6 className="wd-details"> Name: <input name="name" type="text" className ="wd-curved-border"/> </h6>
            <h6> User Name: <input name="user" type="text" className ="wd-curved-border"/></h6>
            <h6> Email: <input name="email" type="text" className ="wd-curved-border"/></h6>

            <p>Bio: <textarea name="bio" type="text" className ="wd-curved-border"/></p>
            <h6>Nationality: <input name="nationality" type="text" className ="wd-curved-border"/></h6>
        </div>

</div>


 );
};
export default EditProfile;