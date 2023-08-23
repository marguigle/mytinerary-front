/* import "./cityDetail.css";

const CityDetail = () => {
  return (
    <main className="main-city-detali">
      <img src="public/img/descarga.png" className="img-consttrction" alt="" />
    </main>
  );
};

export default CityDetail;
 */

import { useLocation } from "react-router-dom";
import queryString from "query-string";
import "./cityDetail.css";

const CityDetail = () => {
  const location = useLocation();
  const { image, name } = queryString.parse(location.search);

  return (
    <main className="main-city-detali">
      <div className="city-detail">
        <h1>{name}</h1>
        <img src={image} className="city-image" alt={name} />
      </div>
      <img src="public/img/descarga.png" className="img-consttrction" alt="" />
    </main>
  );
};

export default CityDetail;
