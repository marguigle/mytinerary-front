import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./reducers/citiesReducer.js";
export const store = configureStore({
  reducer: {
    cities: citiesReducer,
  },
});
