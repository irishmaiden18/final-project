//import {useEffect, useState} from "react";
//import * as service from './users-service'
//import {useDispatch, useSelector} from "react-redux";
//import {findAllUsersThunk} from "./users-thunks";

const Home = () => {
    return(
        <>
            <h1>Home Content</h1>
            <div className ="wd-box">
                    <h1> Top 5 Songs:</h1>
                    <h6>1.abc</h6>
                    <h6>2.def</h6>
                    <h6>3.mno</h6>
                    <h6>4.uvw</h6>
                    <h6>5.xyz</h6>
           </div>
           <div className ="wd-box">
                   <h1> Top 5 Albums:</h1>
                   <h6>1.abc</h6>
                   <h6>2.def</h6>
                   <h6>3.mno</h6>
                   <h6>4.uvw</h6>
                   <h6>5.xyz</h6>
           </div>
        </>
    );
}

export default Home;