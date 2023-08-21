import "./cities.css";
import { useState, useEffect } from "react";
import { getAllCities } from "../../services/cityService.js";
import CardCities from "../../components/cardCities/CardCities.jsx";

const Cities = () => {
  const [cities, setCities] = useState([]);
  console.log(cities);

  /*  useEffect(() => {
    getAllCities().then(setCities);
  }, []);
 */
  useEffect(() => {
    console.log("Fetching cities...");
    getAllCities().then((data) => {
      console.log("Cities data from getAllCities():", data);
      setCities(data.response);
    });
  }, []);

  return (
    <main className="container-fuid">
      <div className="cities-search">
        <input className="searchCity" type="text" placeholder="Search" />
      </div>
      {cities.map((item) => (
        <CardCities key={item._id} city={item} />
      ))}
    </main>
  );
};

export default Cities;
