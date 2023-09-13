import { createReducer } from "@reduxjs/toolkit";
import {
  signUp,
  signIn,
  signInWithToken,
  logout,
} from "../actions/userActions.js";

const initialState = {
  user: null,
  token: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUp.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(signIn.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(signInWithToken.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    })
    .addCase(logout, (state) => {
      return {
        ...state,
        user: null,
        token: null,
      };
    });
});
