import "./cities.css";
import { useState, useEffect, useRef } from "react";
import { getAllCities } from "../../services/cityService.js";
import CardCities from "../../components/cardCities/CardCities.jsx";

const Cities = () => {
  const [cities, setCities] = useState([]);
  console.log(cities);
  const inputSearch = useRef(null);

  useEffect(() => {
    console.log("Fetching cities...");
    getAllCities().then((data) => {
      console.log("Cities data from getAllCities():", data);
      setCities(data.response);
    });
  }, []);

  const handleSearch = () => {
    const search = inputSearch.current.value;
    let query = `?`;
    if (search) {
      query += "name=" + search;
    }
    getAllCities(query).then((data) => setCities(data.response));
  };
  return (
    <main>
      <div>
        <input
          className="searchCity"
          type="text"
          placeholder="Search"
          onInput={handleSearch}
          ref={inputSearch}
        />
      </div>
      <div className="container">
        {cities.map((item) => (
          <CardCities key={item._id} city={item} />
        ))}
      </div>
    </main>
  );
};

export default Cities;
