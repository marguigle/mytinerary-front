import { createReducer } from "@reduxjs/toolkit";
import { signUp } from "../actions/userActions.js";

const initialStore = {
  users: [],
};

export const userReducer = createReducer(initialStore, (builder) => {
  builder.addCase(signUp, (state, action) => {
    state.signUp = action.payload;
  });
});
