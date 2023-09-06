import { useLocation } from "react-router-dom";
import queryString from "query-string";
import "./cityDetail.css";
import { Link as Anchor } from "react-router-dom";
import CityItineraries from "../cityItineraries/CityItineraries.jsx";

const CityDetail = () => {
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
        <CityItineraries />

        {/*         <section className="cont-itineraries">
          <div className="cont-itinerary-card">
            <div className="guide">
              <img src="public/img/guia-1.jpeg" className="img-guide" alt="" />
              <p className="guide-name">Guide Name</p>
            </div>

            <p>Itinerary:</p>
            <p>Price:</p>
            <p>duration:</p>
            <p>Hashtags:</p>
            <button className="btn-ViewMore">view more</button>
          </div>
        </section> */}
      </div>
    </main>
  );
};

export default CityDetail;
