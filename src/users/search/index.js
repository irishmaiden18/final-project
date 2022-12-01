//import {useState} from "react";
//import {useDispatch, useSelector} from "react-redux";
//import {loginThunk, registerThunk} from "./users-thunks";
import React from "react";
const Search = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <i className="bi bi-search position-absolute wd-nudge-up"></i>
                    <input placeholder="Search Songs" className="form-control rounded-pill ps-5"/>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <h1>Search Content</h1>
        </>
    );
}

export default Search;