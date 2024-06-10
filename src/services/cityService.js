import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// Obtener la URL base de las variables de entorno
const baseURL = process.env.URL_BASE;

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
