import { createReducer } from "@reduxjs/toolkit";
import { cargarItinerarios } from "../actions/itinerariesActions";

const initialStore = {
  allItineraries: [],
  filteredItineraries: [],
};
export const itinerariesReducer = createReducer(initialStore, (builder) => {
  builder.addCase(cargarItinerarios.fulfilled, (state, action) => {
    return {
      ...state,
      allItineraries: action.payload,
      filteredItineraries: action.payload,
    };
  });
});
