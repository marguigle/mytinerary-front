import "./carrucel.css";
import { useState } from "react";

const Carrucel = () => {
  const [indice, setIndice] = useState(0);

  const fotoCiudades = [
    {
      id: 0,
      foto1: "../public/img/copenhagen-142711_1280.jpg",
      foto2: "../public/img/dubai-2650364_1280.jpg",
      foto3: "../public/img/london-123785_1280.jpg",
      foto4: "../public/img/san-fransisco-4065321_1280.jpg",
    },

    {
      id: 1,
      foto1: "../public/img/munich-1572429_1280.jpg",
      foto2: "../public/img/paris-100277_1280.jpg",
      foto3: "../public/img/imadrid.jpg",
      foto4: "../public/img/pyramid-3084261_1280.jpg",
    },

    {
      id: 2,
      foto1: "../public/img/washington-dc-85531_1280.jpg",
      foto2: "../public/img/imadrid.jpg",
      foto3: "../public/img/portugal-4828134_1280.jpg",
      foto4: "../public/img/valencia-82132_1280.jpg",
    },
    {
      id: 3,
      foto1: "../public/img/venice-4756377_1280.jpg",
      foto2: "../public/img/portugal-4828134_1280.jpg",
      foto3: "../public/img/venice-2364149_1280.jpg",
      foto4: "../public/img/venice-4756377_1280.jpg",
    },
  ];

  const prev = () => {
    setIndice((indice - 1 + fotoCiudades.length) % fotoCiudades.length);
  };

  const next = () => {
    setIndice((indice + 1) % fotoCiudades.length);
  };

  return (
    <>
      <section className="tituloCarrusel">
        <h2>Popular Mytineraries</h2>

        <section className="section-carousel ">
          <button className="btn-carroucel" onClick={prev}>
            {"👈"}
          </button>
          <div className="contenedor-carrusel ">
            <img
              src={fotoCiudades[indice].foto1}
              alt=""
              className="img-carrusel"
            />
            <img
              src={fotoCiudades[indice].foto2}
              alt=""
              className="img-carrusel"
            />
            <img
              src={fotoCiudades[indice].foto3}
              alt=""
              className="img-carrusel"
            />
            <img
              src={fotoCiudades[indice].foto4}
              alt=""
              className="img-carrusel"
            />
          </div>
          <button onClick={next}>{"👉"}</button>
        </section>
      </section>
    </>
  );
};

export default Carrucel;
