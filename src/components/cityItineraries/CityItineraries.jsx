import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cargarItinerarios } from "../../redux/actions/itinerariesActions.js";
import "./cityItineraries.css";

const CityItineraries = ({ _id }) => {
  const dispatch = useDispatch();
  const itinerariesStore = useSelector((store) => store.itineraries);

  useEffect(() => {
    console.log(
      "Datos de itinerarios en el estado:",
      itinerariesStore.allItineraries
    );
    console.log("Datos de itinerarios en el estado 2:", filteredItineraries);
    dispatch(cargarItinerarios());
    console.log(cityItineraries);
    console.log("Valor de id:", _id);
  }, []);

  const filteredItineraries = itinerariesStore.allItineraries;
  const cityItineraries = filteredItineraries.filter(
    (item) => item.city._id === _id
  );

  return (
    <>
      {" "}
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
                <button className="btn-ViewMore">view more</button>
              </div>
            ))
          )}
        </section>
      </div>
      <div className="itinerary-details"></div>
    </>
  );
};

export default CityItineraries;
