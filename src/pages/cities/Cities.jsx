import "./cities.css";
import { useState, useEffect, useRef } from "react";
import { getAllCities } from "../../services/cityService.js";
import CardCities from "../../components/cardCities/CardCities.jsx";
import { Link as Anchor } from "react-router-dom";

const Cities = () => {
  const [cities, setCities] = useState([]);
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
      <div className="conteinerSearch">
        <input
          className="searchCity"
          type="text"
          placeholder="Search a City"
          onInput={handleSearch}
          ref={inputSearch}
        />
      </div>

      <div className="container">
        {cities.map((item) => (
          <div key={item._id}>
            <Anchor
              className="anchorCity"
              to={`/cityDetail?id=${item._id}&name=${encodeURIComponent(
                item.name
              )}&image=${encodeURIComponent(item.image)}
              &description=${encodeURIComponent(item.description)} `}
            >
              <CardCities city={item} />
            </Anchor>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Cities;
