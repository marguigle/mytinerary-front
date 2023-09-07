import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cargarItinerarios } from "../../redux/actions/itinerariesActions.js";
import "./cityItineraries.css";
import ItineraryDetails from "../itineraryDetails/ItineraryDetails.jsx";

const CityItineraries = ({ _id }) => {
  const dispatch = useDispatch();
  const itinerariesStore = useSelector((store) => store.itineraries);

  const [selectedItinerary, setSelectedItinerary] = useState(null);

  useEffect(() => {
    dispatch(cargarItinerarios());
  }, []);

  const filteredItineraries = itinerariesStore.allItineraries;
  const cityItineraries = filteredItineraries.filter(
    (item) => item.city._id === _id
  );

  const handleToggleDetails = (itinerary) => {
    if (selectedItinerary === itinerary) {
      setSelectedItinerary(null);
    } else {
      setSelectedItinerary(itinerary);
    }
  };

  return (
    <div>
      <section className="cont-itineraries">
        {cityItineraries.length === 0 ? (
          <h2>No itineraries were found for this city.</h2>
        ) : (
          cityItineraries.map((item) => (
            <div className="cont-itinerary-card" key={item._id}>
              <div className="guide">
                <img src={item.guideImage} className="img-guide" alt="" />
                <p className="guide-name">Guide Name: {item.guideName}</p>
              </div>
              <p>Itinerary: {item.itinerary}</p>
              <p>Price: {item.price}</p>
              <p>Duration: {item.duration}</p>
              <p>Hashtags: {item.hashtags}</p>
              <button
                className="btn-ViewMore"
                onClick={() => handleToggleDetails(item)}
              >
                {selectedItinerary === item ? "Hide Details" : "View More"}
              </button>
              {selectedItinerary === item && (
                <ItineraryDetails itinerary={selectedItinerary} />
              )}
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default CityItineraries;
