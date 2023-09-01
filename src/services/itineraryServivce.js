import axios from "axios";
const itineraryQueries = axios.create({
  baseURL: "http://localhost:3000/api/itineraries",
});

export const getAllItineraries = async (queryParams = "") => {
  try {
    const response = await itineraryQueries.get(queryParams);
    return response.data;
  } catch (error) {
    return [];
  }
};
