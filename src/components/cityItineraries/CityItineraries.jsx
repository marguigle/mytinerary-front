/* import { useDispatch, useSelector } from "react-redux";
import { cargarItinerarios } from "../../redux/actions/itinerariesActions.js";
import { useEffect } from "react";

const CityItineraries = ({ name }) => {
  const dispatch = useDispatch();

  const itinerariesStore = useSelector((store) => store.itineraries);

  useEffect(() => {
    dispatch(cargarItinerarios());
  }, []);
  const filteredItineraries = itinerariesStore.allItineraries || [];
  const cityItineraries = filteredItineraries.filter(
    (item) => item.city.name === name
  );

  return (
    <div>
      <section className="cont-itineraries">
        {cityItineraries.response.map((item) => (
          <div className="cont-itinerary-card" key={item.id}>
            <div className="guide">
              <img src={item.guideImage} className="img-guide" alt="" />
              <p className="guide-name">Guide Name: {item.guideName}</p>
            </div>
            <p>Itinerary: {item.Itinerary}</p>
            <p>Price: {item.price}</p>
            <p>Duration: {item.duration}</p>
            <p>Hashtags: {item.hashtags}</p>
            <button className="btn-ViewMore">view more</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CityItineraries; */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cargarItinerarios } from "../../redux/actions/itinerariesActions.js";

const CityItineraries = ({ itinerary }) => {
  const dispatch = useDispatch();
  const itinerariesStore = useSelector((store) => store.itineraries);

  // Cargar los itinerarios cuando el componente se monte
  /*   useEffect(() => {
    dispatch(cargarItinerarios());
  }, [dispatch]);
 */
  useEffect(() => {
    dispatch(cargarItinerarios()).then(() => {
      console.log("Después de cargarItinerarios linea 56");
      console.log(
        "Datos de itinerarios en el estado linea 58:",
        itinerariesStore.allItineraries
      );
    });
  }, [dispatch]);

  // Filtrar itinerarios por la ciudad actual
  const filteredItineraries = itinerariesStore.allItineraries || [];

  const cityItineraries = filteredItineraries.filter(
    (item) => item.city && item.city.itinerary === itinerary
  );

  /*  const cityItineraries = filteredItineraries.filter(
    (item) => item.city && item.city.name === name
  ); */

  return (
    <div>
      <section className="cont-itineraries">
        {cityItineraries.map((item) => (
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
        ))}
      </section>
    </div>
  );
};

export default CityItineraries;
