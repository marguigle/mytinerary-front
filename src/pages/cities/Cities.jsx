import "./cities.css";
import { useEffect, useRef } from "react";
/* import { getAllCities } from "../../services/cityService.js"; */
import CardCities from "../../components/cardCities/CardCities.jsx";
import { Link as Anchor } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  /* cargarCiudades, */
  filtrarCiudades,
  cargarCiudadesAsync,
} from "../../redux/actions/citiesActions.js";

const Cities = () => {
  const dispatch = useDispatch();

  const inputSearch = useRef(null);

  const citiesStore = useSelector((store) => store.cities);
  console.log("linea 17: " + citiesStore);

  useEffect(() => {
    dispatch(cargarCiudadesAsync());
    /*   console.log("Fetching cities...");
    getAllCities().then((cities) => dispatch(cargarCiudades(cities))); */
  }, []);

  const handleSearch = () => {
    const search = inputSearch.current.value;
    dispatch(filtrarCiudades(search));
    citiesStore.allCities.filter((city) =>
      city.name.toLowerCase().startswith(search.toLowerCase())
    );

    /*    
    let query = `?`;
    if (search) {
      query += "name=" + search;
    }
    */
    // getAllCities(query).then((data) => setCities(data.response));
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
        {citiesStore.filteredCities.map((item) => (
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
