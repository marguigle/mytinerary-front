import { createReducer } from "@reduxjs/toolkit";
import { signUp, signIn, signInWithToken } from "../actions/userActions.js";

const initialStore = {
  user: null,
  token: null,
};

export const userReducer = createReducer(initialStore, (builder) => {
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
    });
});
