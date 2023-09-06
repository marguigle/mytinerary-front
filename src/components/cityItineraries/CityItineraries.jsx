/* import { useDispatch, useSelector } from "react-redux";
import { cargarItinerarios } from "../../redux/actions/itinerariesActions.js";
import { useEffect } from "react";

const CityItineraries = () => {
  const dispatch = useDispatch();

  const itinerariesStore = useSelector((store) => store.itineraries);
  useEffect(() => {
    dispatch(cargarItinerarios());
  }, []);
  itinerariesStore.allItineraries.filter((itinerary) => {
    itinerary;
  });

  return (
    <div>
      <section className="cont-itineraries">
      
{itinerariesStore.allItineraries.map((item) =>(

  <div className="cont-itinerary-card">
  <div className="guide">
    <img src={item.guideImage} className="img-guide" alt="" />
    <p className="guide-name">Guide Name: {item.guideName}</p>
  </div>

  <p>{item.Itinerary}:</p>
  <p>Price:{item.price}</p>
  <p>duration:{item.duration}</p>
  <p>Hashtags:{item.hashtags}</p>
  <button className="btn-ViewMore">view more</button>
</div>

))
  )
</section>

</div>
};


export default CityItineraries;

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
</div>  */
import { useDispatch, useSelector } from "react-redux";
import { cargarItinerarios } from "../../redux/actions/itinerariesActions.js";
import { useEffect } from "react";

const CityItineraries = () => {
  const dispatch = useDispatch();

  const itinerariesStore = useSelector((store) => store.itineraries);

  useEffect(() => {
    dispatch(cargarItinerarios());
  }, []);

  // Filtrar itinerarios si es necesario
  const filteredItineraries = itinerariesStore.allItineraries || [];

  return (
    <div>
      <section className="cont-itineraries">
        {filteredItineraries.map((item) => (
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

export default CityItineraries;
