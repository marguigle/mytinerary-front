import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const cargarItinerarios = createAsyncThunk(
  "cargar_itinerarios",
  async () => {
    try {
      const peticion = await axios("http://localhost:3000/api/itineraries");
      return peticion.data.response;
    } catch (error) {
      console.log(error);
    }
  }
);
