import { createReducer } from "@reduxjs/toolkit";
import { cargarCiudades, filtrarCiudades } from "../actions/citiesActions";
const initialStore = {
  allCities: [],
  filteredCities: [],
};
export const citiesReducer = createReducer(initialStore, (builder) => {
  builder
    .addCase(cargarCiudades, (state, action) => {
      const newState = { ...state };
      newState.allCities = action.payload;
      newState.filteredCities = action.payload;
      return newState;

      /* return{
  ...state,
  allCities:action.payload,
  filteredCities:action.payload
}
 */
    })
    .addCase(filtrarCiudades, (state) => {
      return {
        ...state,
      };
    });
});
