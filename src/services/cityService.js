import axios from "axios";
const cityQueries = axios.create({
  baseURL: "http://localhost:3000/api/cities",
});

export const getAllCities = async (queryParams = "") => {
  try {
    const response = await cityQueries.get(queryParams);
    return response.data;
  } catch (error) {
    return [];
  }
};

/* cityQueries()
.then((res) => {
  setCities(res.data);
})
.catch((error) => console.log(error)); */
