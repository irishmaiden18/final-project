import {createSlice} from "@reduxjs/toolkit";
import {userLikesMovieThunk} from "./likes-thunks";

const initialState = {
    likes: [],
    loading: false
}

const likesReducer = createSlice({
      name: "likes",
      initialState: initialState,
      reducers: {},
      extraReducers: {
          [userLikesMovieThunk.fulfilled]: (state, action) => {
              state.likes.push(action.payload)
          }
      }
})

console.log(likesReducer);
export default likesReducer;