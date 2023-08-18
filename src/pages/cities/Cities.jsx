import "./cities.css";
import CardCities from "../../components/cardCities/CardCities";
/*  import cityArray from "../../../public/cityArray.js"; */
/* import { useState, useEffect } from "react"; */
/* const URL = "../../public/cityArray.js"; */
/* const URL = cityArray */

const cityArray = [
  {
    id: 1,
    image: "../public/img/copenhagen-142711_1280.jpg",
    name: "Copenhagen Denmark",
    lenguage: "Danish",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },

  {
    id: 2,
    image: "../public/img/dubai-2650364_1280.jpg",
    name: "Dubai, United Arab Emirates",
    lenguage: "Arab",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    id: 3,
    image: "../public/img/london-123785_1280.jpg",
    name: "London, England",
    lenguage: "English",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    id: 4,
    image: "../public/img/munich-1572429_1280.jpg",
    name: "Munich, Germany",
    lenguage: "German",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    id: 5,
    image: "../public/img/paris-100277_1280.jpg",
    name: "Paris, France",
    lenguage: "French",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    id: 6,
    image: "../public/img/imadrid.jpg",
    name: "Madrid, Spain",
    lenguage: "Spanish",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    id: 7,
    image: "../public/img/washington-dc-85531_1280.jpg",
    name: "Washington, USA",
    lenguage: "English",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    id: 8,
    image: "../public/img/imadrid.jpg",
    name: "Madrid, Spain",
    lenguage: "Spanish",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    id: 9,
    image: "../public/img/portugal-4828134_1280.jpg",
    name: "Lisbon, Portugal",
    lenguage: "Portuguese",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },

  {
    id: 10,
    image: "../public/img/venice-4756377_1280.jpg",
    name: "Venice, Italy",
    lenguage: "Italian",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    id: 11,
    image: "../public/img/barcelona.jpg",
    name: "Barcelona, Spain",
    lenguage: "Spanish",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
  {
    id: 12,
    image: "../public/img/venice-2364149_1280.jpg",
    name: "Venice, Italy",
    lenguage: "Italian",
    description:
      "El Reino Unido, compuesto por Inglaterra, Escocia, Gales e Irlanda del Norte, es una nación insular del noroeste de Europa. Inglaterra, l",
  },
];

const Cities = () => {
  /*   const [data, setData] = useState(null);
  /*  useEffect(() => setData(data), []); */

  /* useEffect(() => {
    setData(data);
    fetch(URL)
      .then((response) => response.json)
      .then((datos) => setData(datos));
  }, []); */
  /* console.log(data); */
  return (
    <main className="container-fuid">
      <div className="cities-search">
        <input className="searchCity" type="text" placeholder="Search" />
      </div>
      <div className="container-fullCard">
        {cityArray.map((city) => (
          <CardCities key={city.id} city={city} />
        ))}
      </div>
    </main>
  );
};

export default Cities;
