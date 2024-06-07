import axios from "axios";
import dotenv from "dotenv";

// Cargar variables de entorno desde el archivo .env
dotenv.config();
const baseURL = process.env.URL_BASE || "http://localhost:3000/api";

const itineraryQueries = axios.create({
  baseURL: `${baseURL}/itineraries`, // Combinar la URL base con la ruta específica
});

export const getAllItineraries = async (queryParams = "") => {
  try {
    const response = await itineraryQueries.get(queryParams);
    return response.data;
  } catch (error) {
    return [];
  }
};
