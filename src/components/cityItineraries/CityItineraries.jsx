/* import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cargarItinerarios } from "../../redux/actions/itinerariesActions.js";
import "./cityItineraries.css";
import ItineraryDetails from "../itineraryDetails/ItineraryDetails.jsx";

const CityItineraries = ({ _id }) => {
  const dispatch = useDispatch();
  const itinerariesStore = useSelector((store) => store.itineraries);
  //------------------------------------------------

  const [selectedItinerary, setSelectedItinerary] = useState(null); // Estado para almacenar el itinerario seleccionado

  const handleClick = () => {
    setSelectedItinerary(<ItineraryDetails />);
  };

  //-------------------------------------------

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
              <button className="btn-ViewMore" onClick={handleClick}>
                view more
              </button>
            </div>
          ))
        )}
        <ItineraryDetails />
      </section>
    </div>
  );
};

export default CityItineraries;
 */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cargarItinerarios } from "../../redux/actions/itinerariesActions.js";
import "./cityItineraries.css";
import ItineraryDetails from "../itineraryDetails/ItineraryDetails.jsx";

const CityItineraries = ({ _id }) => {
  const dispatch = useDispatch();
  const itinerariesStore = useSelector((store) => store.itineraries);
  const [selectedItinerary, setSelectedItinerary] = useState(null); // Estado para almacenar el itinerario seleccionado

  useEffect(() => {
    dispatch(cargarItinerarios());
  }, []);

  const filteredItineraries = itinerariesStore.allItineraries;
  const cityItineraries = filteredItineraries.filter(
    (item) => item.city._id === _id
  );

  const handleShowDetails = (itinerary) => {
    setSelectedItinerary(itinerary);
  };

  const handleCloseDetails = () => {
    setSelectedItinerary(null); // Establece el estado en null para ocultar los detalles
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
                onClick={() => handleShowDetails(item)}
              >
                view more
              </button>
            </div>
          ))
        )}

        {/* Renderizar el componente ItineraryDetails si está definido */}
        {selectedItinerary && (
          <div>
            <button className="btn-CloseDetails" onClick={handleCloseDetails}>
              Close Details
            </button>
            <ItineraryDetails itinerary={selectedItinerary} />
          </div>
        )}
      </section>
    </div>
  );
};

export default CityItineraries;
