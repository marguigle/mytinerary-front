import "./carrucel.css";
import { useState } from "react";

const Carrucel = () => {
  let [indice, setIndice] = useState(0);

  const fotoCiudades = [
    { id: 0, foto: "../public/img/copenhagen-142711_1280.jpg" },
    { id: 1, foto: "../public/img/dubai-2650364_1280.jpg" },
    { id: 2, foto: "../public/img/london-123785_1280.jpg" },
    { id: 3, foto: "../public/img/munich-1572429_1280.jpg" },
    { id: 4, foto: "../public/img/paris-100277_1280.jpg" },
    { id: 5, foto: "../public/img/paris-106863_1280.jpg" },
    { id: 6, foto: "../public/img/pyramid-3084261_1280.jpg" },
    { id: 7, foto: "../public/img/washington-dc-85531_1280.jpg" },
  ];

  const prev = () => {
    indice == 0
      ? setIndice(fotoCiudades.length - 1)
      : setIndice((indice = indice - 1));
  };

  const next = () => {
    setIndice((indice = indice + 1));
  };

  return (
    <>
      <section className="section-carousel container-flex">
        <button className="btn-carroucel" onClick={prev}>
          {"<"}
        </button>
        <div className="contenedor-carrusel col-6">
          <img
            src={fotoCiudades[indice].foto}
            alt=""
            className="img-carrusel"
          />
          <img src={fotoCiudades[1].foto} alt="" className="img-carrusel" />
          <img src={fotoCiudades[2].foto} alt="" className="img-carrusel" />
          <img src={fotoCiudades[3].foto} alt="" className="img-carrusel" />
        </div>
        <button onClick={next}>{">"}</button>
      </section>
    </>
  );
};

export default Carrucel;
