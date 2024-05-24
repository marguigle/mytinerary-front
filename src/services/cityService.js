import axios from "axios";
import dotenv from "dotenv";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Obtener la URL base de las variables de entorno
const baseURL = process.env.URL_BASE || "http://localhost:3000/api";

const cityQueries = axios.create({
  baseURL: `${baseURL}/cities`, // Combinar la URL base con la ruta específica
});

export const getAllCities = async (queryParams = "") => {
  try {
    const response = await cityQueries.get(queryParams);
    return response.data;
  } catch (error) {
    return [];
  }
};
