import "./carrucel.css";
import { useState, useEffect, useCallback } from "react";

const Carrucel = () => {
  const [indice, setIndice] = useState(0);

  const fotoCiudades = [
    {
      id: 0,
      foto1: "../img/copenhagen-142711_1280.jpg",
      nombre1: "Copenhagen Denmark",
      foto2: "../img/dubai-2650364_1280.jpg",
      nombre2: "Dubai, United Arab Emirates",
      foto3: "../img/london-123785_1280.jpg",
      nombre3: "London, England",
      foto4: "../img/copenhagen-142711_1280.jpg",
      nombre4: "Copenhagen Denmark",
    },

    {
      id: 1,
      foto1: "../img/munich-1572429_1280.jpg",
      nombre1: "Munich, Germany",
      foto2: "../img/paris-100277_1280.jpg",
      nombre2: "Paris, France",
      foto3: "../img/imadrid.jpg",
      nombre3: "Madrid, Spain",
      foto4: "../img/munich-1572429_1280.jpg",
      nombre4: "Munich, Germany",
    },

    {
      id: 2,
      foto1: "../img/washington-dc-85531_1280.jpg",
      nombre1: "Washington, USA",
      foto2: "../img/imadrid.jpg",
      nombre2: "Madrid, Spain",
      foto3: "../img/portugal-4828134_1280.jpg",
      nombre3: "Lisbon, Portugal",
      foto4: "../img/washington-dc-85531_1280.jpg",
      nombre4: "Washington, USA",
    },
    {
      id: 3,
      foto1: "../img/venice-4756377_1280.jpg",
      nombre1: "Venice, Italy",
      foto2: "../img/barcelona.jpg",
      nombre2: "Barcelona, Spain",
      foto3: "../img/venice-2364149_1280.jpg",
      nombre3: "Venice, Italy",
      foto4: "../img/venice-4756377_1280.jpg",
      nombre4: "Venice, Italy",
    },
  ];

  const prev = () => {
    setIndice((indice - 1 + fotoCiudades.length) % fotoCiudades.length);
  };

  const next = useCallback(() => {
    setIndice((indice + 1) % fotoCiudades.length);
  }, [indice]);

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [next]);

  return (
    <section className="tituloCarrusel">
      <div>
        <h2>Popular Mytineraries</h2>
      </div>

      <section className="section-carousel">
        <div className="hands">
          <button className="bt-carroucel-prev" onClick={prev}>
            {"👈"}
          </button>
        </div>
        <div className="contenedor-carrusel">
          {fotoCiudades.map((ciudad) => (
            <div className="contenedorImg" key={ciudad.id}>
              <img
                src={ciudad[`foto${indice + 1}`]}
                alt="foto ciudad"
                className="img-carrusel"
              />
              <p>{ciudad[`nombre${indice + 1}`]}</p>
            </div>
          ))}
        </div>
        <button onClick={next}>{"👉"}</button>
      </section>
    </section>
  );
};

export default Carrucel;
