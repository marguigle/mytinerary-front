import { createReducer } from "@reduxjs/toolkit";
import {
  cargarCiudades,
  filtrarCiudades,
  cargarCiudadesAsync,
} from "../actions/citiesActions";

const initialStore = {
  allCities: [],
  filteredCities: [],
};

export const citiesReducer = createReducer(initialStore, (builder) => {
  builder
    .addCase(cargarCiudades, (state, action) => {
      state.allCities = action.payload;
      state.filteredCities = action.payload;
    })
    .addCase(filtrarCiudades, (state, action) => {
      const filtered = state.allCities.filter((city) =>
        city.name.toLowerCase().startsWith(action.payload.search)
      );

      return { ...state, filteredCities: filtered };
    })
    .addCase(cargarCiudadesAsync.fulfilled, (state, action) => {
      return {
        ...state,
        allCities: action.payload,
        filteredCities: action.payload,
      };
    });
});
