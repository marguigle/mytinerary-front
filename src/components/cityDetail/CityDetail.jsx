import { useLocation } from "react-router-dom";
import queryString from "query-string";
import "./cityDetail.css";
import { Link as Anchor } from "react-router-dom";

const CityDetail = () => {
  const location = useLocation();
  const { image, name } = queryString.parse(location.search);

  return (
    <main className="main-city-detali">
      <div className="city-detail ">
        <h3>{name}</h3>
        <img src={image} className="city-image" alt={name} />
        <Anchor className="anchor-CityDetail" to={"../cities"}>
          return to cities
        </Anchor>{" "}
        <img
          src="public/img/descarga.png"
          className="img-construction"
          alt=""
        />
      </div>
    </main>
  );
};

export default CityDetail;
