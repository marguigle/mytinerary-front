import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const cargarCiudades = createAction("cargar_ciudades", (cities) => {
  return {
    payload: cities,
  };
});

export const cargarCiudadesAsync = createAsyncThunk(
  "cargar_ciudades_async",
  async () => {
    try {
      const peticion = await axios("http://localhost:3000/api/cities");
      console.log(peticion);
      return peticion.data.response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const filtrarCiudades = createAction("filtrar_ciudades", (search) => {
  return {
    payload: {
      search: search,
    },
  };
});
