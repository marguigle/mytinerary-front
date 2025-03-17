// import { useEffect, useRef } from "react";
// import { Link as Anchor } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   filtrarCiudades,
//   cargarCiudadesAsync,
// } from "../../redux/actions/citiesActions.js";
// import CityNotFound from "../../components/CityNotFound.jsx";
// import "./cities.css";
// import CardCities from "../../components/cardCities/CardCities.jsx";

// const Cities = () => {
//   const dispatch = useDispatch();
//   const inputSearch = useRef(null);
//   const citiesStore = useSelector((store) => store.cities);

//   useEffect(() => {
//     dispatch(cargarCiudadesAsync());
//   }, []);

//   const handleSearch = () => {
//     const search = inputSearch.current.value;
//     dispatch(filtrarCiudades(search));
//   };

//   return (
//     <main className="city-main-container">
//       <div className="conteinerSearch">
//         <input
//           className="searchCity"
//           type="text"
//           placeholder="Search a City"
//           onInput={handleSearch}
//           ref={inputSearch}
//         />
//       </div>

//       <div className="container">
//         {citiesStore.filteredCities.length === 0 ? (
//           <CityNotFound />
//         ) : (
//           citiesStore.filteredCities.map(
//             (item) => console.log(item.data)
//             <div key={item._id}>
//               <Anchor
//                 className="anchorCity"
//                 to={`/cityDetail/${item._id}?name=${encodeURIComponent(
//                   item.name
//                 )}&image=${encodeURIComponent(item.image)}
//                 &description=${encodeURIComponent(item.description)} `}
//               >
//                 <CardCities city={item} />
//               </Anchor>
//             </div>
//           )
//         )}
//       </div>
//     </main>
//   );
// };

// export default Cities;

import { useEffect, useRef } from "react";
import { Link as Anchor } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filtrarCiudades,
  cargarCiudadesAsync,
} from "../../redux/actions/citiesActions.js";
import CityNotFound from "../../components/CityNotFound.jsx";
import "./cities.css";
import CardCities from "../../components/cardCities/CardCities.jsx";

const Cities = () => {
  const dispatch = useDispatch();
  const inputSearch = useRef(null);
  const citiesStore = useSelector((store) => store.cities);

  useEffect(() => {
    dispatch(cargarCiudadesAsync());
  }, [dispatch]);

  const handleSearch = () => {
    const search = inputSearch.current.value;
    dispatch(filtrarCiudades(search));
  };

  return (
    <main className="city-main-container">
      <div className="containerSearch">
        <input
          className="searchCity"
          type="text"
          placeholder="Search a City"
          onInput={handleSearch}
          ref={inputSearch}
        />
      </div>

      <div className="container">
        {citiesStore.filteredCities?.length === 0 ? (
          <CityNotFound />
        ) : (
          citiesStore.filteredCities.map((item) => {
            console.log(`este es el console  ${item.data}`);
            return (
              <div key={item._id}>
                <Anchor
                  className="anchorCity"
                  to={`/cityDetail/${item._id}?name=${encodeURIComponent(
                    item.name
                  )}&image=${encodeURIComponent(item.image)}
                  &description=${encodeURIComponent(item.description)}`}
                >
                  <CardCities city={item} />
                </Anchor>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
};

export default Cities;
