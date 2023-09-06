import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import "./cityDetail.css";
import { Link as Anchor } from "react-router-dom";
import CityItineraries from "../cityItineraries/CityItineraries.jsx";

const CityDetail = () => {
  const { id } = useParams();
  console.log("9 " + id);
  const location = useLocation();
  const { image, name, description } = queryString.parse(location.search);
  return (
    <main className="main-city-detail">
      <div className="city-detail ">
        <div className="city-detail-banner">
          <h3>{name}</h3>
          <img src={image} className="city-image" alt={name} />
          <div className="city-description">
            <p>{description}</p>
          </div>
          <Anchor className="anchor-CityDetail" to={"../cities"}>
            GO BACK
          </Anchor>{" "}
        </div>
        <CityItineraries _id={id} />
      </div>
    </main>
  );
};

export default CityDetail;
