import { createAction } from "@reduxjs/toolkit";

export const cargarCiudades = createAction("cargar_ciudades", (ciudades) => {
  return {
    payload: ciudades,
  };
});
export const filtrarCiudades = createAction("filtrar_ciudades", (ciudades) => {
  return {
    payload: ciudades,
  };
});
