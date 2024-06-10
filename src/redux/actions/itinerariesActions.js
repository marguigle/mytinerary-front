import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const cargarItinerarios = createAsyncThunk(
  "cargar_itinerarios",
  async () => {
    try {
      const peticion = await axios(
        import.meta.env.VITE_APP_URL_BASE + "/itineraries"
      );
      return peticion.data.response;
    } catch (error) {
      console.log(error);
    }
  }
);
