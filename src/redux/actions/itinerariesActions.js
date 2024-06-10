import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const cargarItinerarios = createAsyncThunk(
  "cargar_itinerarios",
  async () => {
    try {
      const peticion = await axios(`${process.env.URL_BASE}/itineraries`);
      return peticion.data.response;
    } catch (error) {
      console.log(error);
    }
  }
);
