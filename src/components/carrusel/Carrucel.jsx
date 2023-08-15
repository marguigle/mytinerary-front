import "./carrucel.css";
import { useState, useEffect, useCallback } from "react";

const Carrucel = () => {
  const [indice, setIndice] = useState(0);

  const fotoCiudades = [
    {
      id: 0,
      foto1: "../public/img/copenhagen-142711_1280.jpg",
      nombre1: "Copenhagen Denmark",
      foto2: "../public/img/dubai-2650364_1280.jpg",
      nombre2: "Dubai, United Arab Emirates",
      foto3: "../public/img/london-123785_1280.jpg",
      nombre3: "London, England",
      foto4: "../public/img/copenhagen-142711_1280.jpg",
      nombre4: "Copenhagen Denmark",
    },

    {
      id: 1,
      foto1: "../public/img/munich-1572429_1280.jpg",
      nombre1: "Munich, Germany",
      foto2: "../public/img/paris-100277_1280.jpg",
      nombre2: "Paris, France",
      foto3: "../public/img/imadrid.jpg",
      nombre3: "Madrid, Spain",
      foto4: "../public/img/munich-1572429_1280.jpg",
      nombre4: "Munich, Germany",
    },

    {
      id: 2,
      foto1: "../public/img/washington-dc-85531_1280.jpg",
      nombre1: "Washington, USA",
      foto2: "../public/img/imadrid.jpg",
      nombre2: "Madrid, Spain",
      foto3: "../public/img/portugal-4828134_1280.jpg",
      nombre3: "Lisbon, Portugal",
      foto4: "../public/img/washington-dc-85531_1280.jpg",
      nombre4: "Washington, USA",
    },
    {
      id: 3,
      foto1: "../public/img/venice-4756377_1280.jpg",
      nombre1: "Venice, Italy",
      foto2: "../public/img/barcelona.jpg",
      foto3: "../public/img/venice-2364149_1280.jpg",
      nombre3: "Venice, Italy",
      foto4: "../public/img/venice-4756377_1280.jpg",
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
      <h2>Popular Mytineraries</h2>

      <section className="section-carousel">
        <button className="bt-carroucel-prev" onClick={prev}>
          {"👈"}
        </button>
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
